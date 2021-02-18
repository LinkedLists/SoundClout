json.extract! @track, :id, :title, :uploader_id, :genre, :description
json.photoUrl url_for(@track.photo)
