@tracks.each do |track|
  json.set! track.id do
    json.extract! track, :id, :title, :uploader_id, :genre, :description
    json.photoUrl url_for(track.photo)
  end
end