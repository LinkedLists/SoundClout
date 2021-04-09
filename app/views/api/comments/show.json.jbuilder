json.comment do 
  json.extract! @comment, :id, :track_id, :uploader_id, :body
  # json.uploader do 
  #   json.extract! @comment.uploader, :username, :profile_img
  # end

  json.username @comment.uploader.username

  if @comment.uploader.profile_img.attached?
    json.profileUrl url_for(@comment.uploader.profile_img)
  else
    json.profileUrl 'https://fsp-seed.s3-us-west-1.amazonaws.com/rick.jpg'
  end

  json.numComments @comment.track.comments.length
end

# json.uploader do 
#   json.extract! @comment.uploader, :username, :profile_img
#   if @comment.uploader.profile_img.attached?
#     json.profileUrl url_for(@comment.uploader.profile_img)
#   else
#     json.profileUrl 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'
#   end
# end

# json.username @comment.uploader.username


