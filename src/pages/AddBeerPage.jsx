import React from 'react'

function AddBeerPage() {
  return (
    <div>
      <br />
      <form>
  <div class="form-group">
    <label hmtlFor="name">Name</label>
    <input type="text" class="form-control" placeholder="Enter beer name" />
  </div>
  <div class="form-group">
    <label hmtlFor="tagline">Tagline</label>
    <input type="text" class="form-control" />
  </div>
  <div class="form-group">
    <label hmtlFor="description">Description</label>
    <textarea type="text" class="form-control" />
  </div>
  <div class="form-group">
    <label hmtlFor="first_brewed">First Brewed</label>
    <input type="text" class="form-control" />
  </div>
  <div class="form-group">
    <label hmtlFor="brewers_tips">Brewer's Tips</label>
    <input type="text" class="form-control" />
  </div>
  <div class="form-group">
    <label hmtlFor="attenuation_level">Attenuation Level</label>
    <input type="number" class="form-control" />
  </div>
  <div class="form-group">
    <label hmtlFor="contributed_by">Contributed By</label>
    <input type="text" class="form-control" />
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
     </form>
     <br />
    </div>
  )
}

export default AddBeerPage