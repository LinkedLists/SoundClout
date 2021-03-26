json.comment do 
  json.extract! @comment, :id, :track_id, :uploader_id, :body
  # json.uploader do 
  #   json.extract! @comment.uploader, :username, :profile_img
  # end

  if @comment.uploader.profile_img.attached?
    json.profileUrl url_for(@comment.uploader.profile_img)
  else
    json.profileUrl 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'
  end
end
