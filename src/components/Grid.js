import grid from "../assets/images/photo-grid.jpg"

export function Grid() {
    return(
      <div className="photo-grid">
        <img className="grid-img" src={grid} />
      </div>
    );
}