import React, {Component} from "react";
import ReactPlayer from "react-player";

class Projects extends Component {

  render() {
    return (
      <div className="d-flex h-100">
        <div className=" container overlay-with-background align-self-center rounded">
          <h4 className="font-weight-bold font-italic mb-4">Projects</h4>
          <div className="mb-5">
            <div className="row justify-content-center">
              <div className="mx-auto">
               <p className="m-0 font-weight-bold font-italic  text-center">Hangman</p>
               <ReactPlayer
                url="https://www.dropbox.com/s/cc1hg8by1a7v6mc/hangman.mp4?raw=1" controls={true}  width={250} height={200}/>
              </div>
              <div className="mx-auto">
                <p className="m-0 font-weight-bold font-italic  text-center">The Mover Game</p>
                <ReactPlayer
                url="https://www.dropbox.com/s/nklgswz4y51kzit/The%20Mover.mp4?raw=1" controls={true}  width={250} height={200}/>
              </div>
            </div>
            <div className="row mt-5">
              <div className="mx-auto">
                <p className="m-0 font-weight-bold font-italic  text-center">Meal's Recipe</p>
                <ReactPlayer
                url="https://www.dropbox.com/s/qagy35fiarhvouo/MealsRecipe.mp4?raw=1" controls={true}  width={250} height={200}/>
              </div>
              <div className="mx-auto">
                <p className="m-0 font-weight-bold font-italic text-center">The Movie Website</p>
                <ReactPlayer
                url="https://www.dropbox.com/s/zqugbi2meypxs0t/MovieWebsite.mp4?raw=1" controls={true}  width={250} height={200}/>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Projects;