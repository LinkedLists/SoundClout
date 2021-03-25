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


demo = User.create!(username: "Demo User", password: "secretpasswordlol")
# user1.save!
# track1 = Track.create!(title: "hello", uploader_id: demo.id, description: "hhahaha", genre: "duh")
track1 = Track.new(title: "Saucy", uploader_id: demo.id, description: "hhahaha", genre: "Rock")
track2 = Track.new(title: "G.O.A.T", uploader_id: demo.id, description: "timi hendrix", genre: "Rock")
track3 = Track.new(title: "Havana", uploader_id: demo.id, description: "my new single", genre: "Pop")
track4 = Track.new(title: "Senorita", uploader_id: demo.id, description: "check out my collab with shawn mendes!!", genre: "Pop")
track5 = Track.new(title: "Castles Made of Sand", uploader_id: demo.id, description: "check out this rare studio version!!", genre: "Rock")
track6 = Track.new(title: "The Wind Cries Mary", uploader_id: demo.id, description: "another rare find", genre: "Rock")
track7 = Track.new(title: "Positions", uploader_id: demo.id, description: "here is another bop", genre: "Pop")

# attach image using open uri
# https://fsp-seed.s3-us-west-1.amazonaws.com/test.jpg
# https://fsp-seed.s3-us-west-1.amazonaws.com/cc.jpg
# https://fsp-seed.s3-us-west-1.amazonaws.com/jimi.jpg

image1 = open('https://fsp-seed.s3-us-west-1.amazonaws.com/nlnd.jpg')
image11 = open('https://fsp-seed.s3-us-west-1.amazonaws.com/nlnd.jpg')
image2 = open('https://fsp-seed.s3-us-west-1.amazonaws.com/cc.jpg')
image3 = open('https://fsp-seed.s3-us-west-1.amazonaws.com/senorita.jpg')
image4 = open('https://fsp-seed.s3-us-west-1.amazonaws.com/jimi.jpg')
image44 = open('https://fsp-seed.s3-us-west-1.amazonaws.com/jimi.jpg')
image5 = open('https://fsp-seed.s3-us-west-1.amazonaws.com/positions.png')

audio1 = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Polyphia++Saucy.mp3")
audio2 = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Polyphia++GOAT+Official+Music+Video.mp3")
audio3 = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Camila+Cabello++Havana+Official+Audio+ft+Young+Thug.mp3")
audio4 = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Shawn+Mendes+Camila+Cabello++Se%C3%B1orita+Lyrics.mp3")
audio5 = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Castles+Made+of+Sand+1967.mp3")
audio6 = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Jimi+Hendrix+The+Wind+Cries+Mary.mp3")
audio7 = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Ariana+Grande++positions+Lyrics.mp3")



track1.photo_file.attach(io: image1, filename: 'nlnd')
track2.photo_file.attach(io: image11, filename: 'nlnd')
track3.photo_file.attach(io: image2, filename: 'camila')
track4.photo_file.attach(io: image3, filename: 'cc and sm')
track5.photo_file.attach(io: image44, filename: 'axis')
track6.photo_file.attach(io: image4, filename: 'axis')
track7.photo_file.attach(io: image5, filename: 'ariana')

track1.audio_file.attach(io: audio1, filename: 'saucy_audio')
track2.audio_file.attach(io: audio2, filename: 'goat_audio')
track3.audio_file.attach(io: audio3, filename: 'havana_audio')
track4.audio_file.attach(io: audio4, filename: 'senorita')
track5.audio_file.attach(io: audio5, filename: 'castles_made_of_sand_audio')
track6.audio_file.attach(io: audio6, filename: 'the_wind_cries_mary_audio')
track7.audio_file.attach(io: audio7, filename: 'positions_audio')


track1.save!
track2.save!
track3.save!
track4.save!
track5.save!
track6.save!
track7.save!
