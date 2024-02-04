import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import FeaturedPost from './FeaturedPost';
import featuredPosts from '../../data/featuresPosts';



export default function Post() {
  return (
      <Container maxWidth="lg">
        <main>
          <Grid container sx={{}}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
        </main>
      </Container>
      
  );
}
