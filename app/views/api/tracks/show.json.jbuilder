json.partial! '/api/tracks/track', track: @track

json.comments do
  @track.comments.each do |comment|
      json.set! comment.id do
          json.extract! comment, :id, :track_id, :uploader_id, :body, :created_at
          json.username comment.uploader.username
          if comment.uploader.profile_img.attached?
            json.profileUrl url_for(comment.uploader.profile_img)
          else
            json.profileUrl 'https://fsp-seed.s3-us-west-1.amazonaws.com/rick.jpg'
          end
      end
  end
end


# json.uploader do 
  # json.extract! @track.uploader, :username
  if @track.uploader.profile_img.attached?
    json.profileUrl url_for(@track.uploader.profile_img)
  else
    json.profileUrl 'https://fsp-seed.s3-us-west-1.amazonaws.com/rick.jpg'
  end
# end

# json.username @track.uploader.username

