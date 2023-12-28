"use strict";
//--------------
// interfaces
//--------------
const authorOne = { name: 'mario', avatar: '/mario.png' };
const newPost = {
    title: 'my first Post',
    body: 'something interesting',
    tags: ['gaming', 'tech'],
    create_at: new Date(),
    author: authorOne, // Passing author interface in Post interface
};
//----------------------------
// as function argument types
//----------------------------
function createPost(post) {
    console.log(`Created post ${post.title} by ${post.author.name}`);
}
// createPost({title: 'a new post'})
// should have all the properties of the Post object or else it will throw an Error
createPost(newPost); // Created post my first Post by mario
//-------------
// With Arrays
//-------------
const nextPost = {
    title: 'my second Post',
    body: 'again something interesting',
    tags: ['tech', 'coding'],
    create_at: new Date(),
    author: authorOne,
};
let posts = [];
posts.push(nextPost);
// Here in nextPost type Post is not defined implicitly,
// but when we hover over the nextPost, the type or structure is shown
// it is because of posts.push(nextPost);
