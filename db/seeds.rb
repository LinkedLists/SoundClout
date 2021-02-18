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

file1 = open('https://fsp-seed.s3-us-west-1.amazonaws.com/test.jpg')
file2 = open('https://fsp-seed.s3-us-west-1.amazonaws.com/cc.jpg')
file3 = open('https://fsp-seed.s3-us-west-1.amazonaws.com/jimi.jpg')
track1.photo.attach(io: file1, filename: 'testing')
track2.photo.attach(io: file2, filename: 'havana')
track3.photo.attach(io: file3, filename: 'jimi')
track1.save!
track2.save!
track3.save!
# track1 = Track.create!(title: "hello", uploader_id: 28, description: "hhahaha", genre: "duh")