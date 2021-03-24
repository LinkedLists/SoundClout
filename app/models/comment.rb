class Comment < ApplicationRecord
  validates :track_id, :uploader_id, :body, presence: :true

  belongs_to :track,
    primary_key: :id,
    foreign_key: :track_id,
    class_name: :Track

  belongs_to :uploader,
    primary_key: :id,
    foreign_key: :uploader_id,
    class_name: :User


  # replies will be coming to a SoundCloud near you! <3 
  # belongs_to :reply,
  #   primary_key: :id,
  #   foreign_key: :comment_id,
  #   class_name: :Comment

end
