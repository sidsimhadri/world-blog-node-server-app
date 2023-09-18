import * as postDao from './post-dao.js';
const postController = (app) => {
  app.post('/api/posts', createPost);
  app.get('/api/posts', findPost);
  app.get('/api/posts/search', searchPosts);
}



const searchPosts = async (req, res) => {
  
  const longitude = parseFloat(req.query.longitude);
  const latitude = parseFloat(req.query.latitude);
  const radius = parseFloat(req.query.radius);
  
  try {
    const radiusInMeters = radius * 1609.34; 
    
    const query = {
      location: {
        $nearSphere: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude], 
          },
          $maxDistance: radiusInMeters,
        },
      },
    };
    
    console.log("Search query:", JSON.stringify(query, null, 2));

    
    const posts = await postDao.findPost(query);
    
    res.json(posts);
  } catch (error) {
    console.error('Error searching posts:', error.message, error.stack);
    
    res.status(500).json({ error: 'An error occurred while searching posts.' });
  }
};

const createPost = async (req, res) => {
  console.log(req.body);
  const newPost = req.body;
  newPost.time = new Date();
  const insertedPost = await postDao
  .createPost(newPost);
  res.json(insertedPost);
  console.log(insertedPost);
}


const findPost = async (req, res) => {
  const data = await postDao.findPost()
  res.json(data);
  
}

export default postController