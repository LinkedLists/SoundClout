@tracks.each do |track|
  json.set! track.id do
    json.partial! '/api/tracks/track', track: track

    if track.uploader.profile_img.attached?
      json.profileUrl url_for(track.uploader.profile_img)
    else
      json.profileUrl 'https://fsp-seed.s3-us-west-1.amazonaws.com/rick.jpg'
    end
  end
end