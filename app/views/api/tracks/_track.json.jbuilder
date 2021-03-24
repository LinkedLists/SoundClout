json.extract! track, :id, :title, :uploader_id, :genre, :description

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