import './App.css';

function App() {
  return (
    <>
      <div className="card">
        <div className="profile">
          <h4>Tejash Vaishnav</h4>
          <h5>Somewhere</h5>
          <h6>Follow</h6>
          <img src="https://picsum.photos/200/300" alt="Profile" />
          <span>.</span>
        </div>
        <div className="post">
          <img src="https://picsum.photos/400/400" alt="Post" />
        </div>
        <div className="icons">
          {/* Add your icon components here */}
        </div>
        <div className="about-post">
          <h4><img src="https://picsum.photos/id/26/20" alt="Like" />  Liked by Gandijuha and 104,424 others</h4>
          <h4 className="name_caption">Tejash Vaishnav <span id="caption">The real test is not whether you avoid this failure, because you won't.....</span></h4>
          <h5 style={{marginTop: "-20px"}}>View all 69 comments</h5>
          <h4><img src="https://picsum.photos/id/19/19" alt="Comment" /><input type="text" style={{marginTop: "-10px"}}/></h4>
          <h6>26 minutes ago</h6>
        </div>
      </div>
    </>
  );
}

export default App;
