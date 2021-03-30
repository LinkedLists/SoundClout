json.partial! '/api/tracks/track', track: @track

json.comments do
  @track.comments.each do |comment|
      json.set! comment.id do
          json.extract! comment, :id, :track_id, :uploader_id, :body, :created_at
          json.username comment.uploader.username
          if comment.uploader.profile_img.attached?
            json.profileUrl url_for(comment.uploader.profile_img)
          else
            json.profileUrl 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'
          end
      end
  end
end


# json.uploader do 
  # json.extract! @track.uploader, :username
  if @track.uploader.profile_img.attached?
    json.profileUrl url_for(@track.uploader.profile_img)
  else
    json.profileUrl 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'
  end
# end

# json.username @track.uploader.username

