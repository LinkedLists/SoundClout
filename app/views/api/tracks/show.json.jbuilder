json.partial! '/api/tracks/track', track: @track

json.comments do
  @track.comments.each do |comment|
      json.set! comment.id do
          json.extract! comment, :id, :track_id, :uploader_id, :body
      end
  end
end