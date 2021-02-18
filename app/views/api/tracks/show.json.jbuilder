json.extract! @track, :id, :title, :genre, :description
json.photoUrl url_for(@track.photo)
