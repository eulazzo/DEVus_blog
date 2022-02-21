export const grpahCMSImageLoader = ({ src }) => src;

export const sortPostsNewOneFirst = (posts) =>
  posts.sort((a, b) => (a.createdAt > b.createdAt ? 0 : 1));
