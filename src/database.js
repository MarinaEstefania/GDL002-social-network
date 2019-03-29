firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    const userId = user.uid;

    //creacion del post
    console.log(userId);

    const createPost = () => {
      const postText = document.getElementById('postText').value;
      // A post entry.
      var postData = {
        /*  author: username, */
        uid: userId,
        body: postText,
        /*   title: title,
          starCount: 0,
          authorPic: picture */
      };
      // Get a key for a new Post.
      var newPostKey = firebase.database().ref().child('posts').push().key;
      // Write the new post's data simultaneously in the posts list and the user's post list.
      var updates = {};
      updates['/posts/' + newPostKey] = postData;
      updates['/user-posts/' + userId + '/' + newPostKey] = postData;
      return firebase.database().ref().update(updates);
    }
    document.getElementById('submitBtn').addEventListener('click', () => createPost());

  }
});
