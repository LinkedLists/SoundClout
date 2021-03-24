# == Schema Information
#
# Table name: tracks
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  uploader_id :integer          not null
#  description :string
#  genre       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Track < ApplicationRecord
  validates :title, :uploader_id, :genre, presence: :true

  belongs_to :uploader,
    primary_key: :id,
    foreign_key: :uploader_id,
    class_name: :User

  has_many :comments, 
    primary_key: :id,
    foreign_key: :track_id,
    class_name: :Comment,
    dependent: :destroy 

  has_one_attached :photo_file
  has_one_attached :audio_file
end
