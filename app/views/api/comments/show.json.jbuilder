json.comment do 
  json.extract! @comment, :id, :track_id, :uploader_id, :body
end