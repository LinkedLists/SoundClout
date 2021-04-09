json.extract! @user, :id, :username
if @user.profile_img.attached?
  json.profileUrl url_for(@user.profile_img)
else
  json.profileUrl 'https://fsp-seed.s3-us-west-1.amazonaws.com/rick.jpg'
end


json.tracks do
  @user.tracks.each do |track|
    json.set! track.id do
      json.extract! track, :id, :title, :genre, :created_at
      json.username track.uploader.username
      json.numComments track.comments.length
      if track.photo_file.attached?
        json.photoUrl url_for(track.photo_file)
      else
        json.photoUrl "https://img.freepik.com/free-icon/black-music-icon_318-9277.jpg?size=338&ext=jpg"
      end
      
      if track.audio_file.attached?
        json.audioUrl url_for(track.audio_file)
      else
        json.audioURL 'https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Marshmello+Halsey++Be+Kind+Halsey+Lyric+Video.mp3'
      end
    end
  end
end