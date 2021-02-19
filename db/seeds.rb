# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Track.destroy_all


demo = User.create!(username: "Demo", password: "secretpasswordlol")
# user1.save!
# track1 = Track.create!(title: "hello", uploader_id: demo.id, description: "hhahaha", genre: "duh")
track1 = Track.new(title: "hello", uploader_id: demo.id, description: "hhahaha", genre: "duh")
track2 = Track.new(title: "jimi", uploader_id: demo.id, description: "dumbdubmdubmdubm", genre: "duh")
track3 = Track.new(title: "cc", uploader_id: demo.id, description: "vavava", genre: "duh")
# attach image using open uri
# https://fsp-seed.s3-us-west-1.amazonaws.com/test.jpg
# https://fsp-seed.s3-us-west-1.amazonaws.com/cc.jpg
# https://fsp-seed.s3-us-west-1.amazonaws.com/jimi.jpg

file1 = open('https://fsp-seed.s3-us-west-1.amazonaws.com/nlnd.jpg')
file2 = open('https://fsp-seed.s3-us-west-1.amazonaws.com/cc.jpg')
file3 = open('https://fsp-seed.s3-us-west-1.amazonaws.com/jimi.jpg')

# audio_1 = open("https://fsp-seed.s3-us-west-1.amazonaws.com/Polyphia+Saucy.mp3")
audio_2 = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Camila+Cabello++Havana+Official+Audio+ft+Young+Thug.mp3")
audio_3 = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Castles+Made+of+Sand+1967.mp3")
# audio_4 = open("https://fsp-seed.s3-us-west-1.amazonaws.com/Polyphia+40oz+Backing+1+alex5000.mp3")
audio_5 = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Polyphia++Saucy.mp3")

track1.photo.attach(io: file1, filename: 'testing')
track2.photo.attach(io: file2, filename: 'havana')
track3.photo.attach(io: file3, filename: 'jimi')

track1.audio.attach(io: audio_5, filename: 'saucy_audio')
track2.audio.attach(io: audio_2, filename: 'havana_audio')
track3.audio.attach(io: audio_3, filename: 'castles_made_of_sand_audio')


track1.save!
track2.save!
track3.save!
# track1 = Track.create!(title: "hello", uploader_id: 28, description: "hhahaha", genre: "duh")