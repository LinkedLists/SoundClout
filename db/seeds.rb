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
# top hits users
arianaGrande = User.create!(username: "Ariana Grande", password: "secretpasswordlol")
theWeeknd = User.create!(username: "The Weeknd", password: "secretpasswordlol")
camilaCabello = User.create!(username: "Camila Cabello", password: "secretpasswordlol")
halsey = User.create!(username: "Halsey", password: "secretpasswordlol")
# polyphia users
polyphia = User.create!(username: "Polyphia", password: "secretpasswordlol")
timHenson = User.create!(username: "Tim Henson", password: "secretpasswordlol")
# kpop users
blackPink = User.create!(username: "Black Pink", password: "secretpasswordlol")
bts = User.create!(username: "BTS", password: "secretpasswordlol")
itzy = User.create!(username: "Itzy", password: "secretpasswordlol")
everglow = User.create!(username: "Everglow", password: "secretpasswordlol")
redVelvet = User.create!(username: "Red Velvet", password: "secretpasswordlol")
taeyeon = User.create!(username: "Taeyeon", password: "secretpasswordlol")
# lofi users
tzelun = User.create!(username: "Tzelun", password: "secretpasswordlol")
lofty = User.create!(username: "Lofty", password: "secretpasswordlol")
tohaj = User.create!(username: "Tohaj", password: "secretpasswordlol")
bido = User.create!(username: "Bido", password: "secretpasswordlol")
stfspkn = User.create!(username: "stfspkn", password: "secretpasswordlol")
# top dance users
duaLipa = User.create!(username: "Dua Lipa", password: "secretpasswordlol")
kygo = User.create!(username: "Kygo", password: "secretpasswordlol")
robinSchulz = User.create!(username: "Robin Schulz", password: "secretpasswordlol")
#fresh vibe users
alleFarben = User.create!(username: "Alle Farben", password: "secretpasswordlol")
# kygo
klingande = User.create!(username: "Klingande", password: "secretpasswordlol")
lostFrequencies = User.create!(username: "Lost Frequencies", password: "secretpasswordlol")
ryyzn = User.create!(username: "RYYZN", password: "secretpasswordlol")
rammor = User.create!(username: "Rammor", password: "secretpasswordlol")
# robinschulz

#demo
profile1 = open("https://fsp-seed.s3-us-west-1.amazonaws.com/rick.jpg") #rick
# top hits users
profile2 = open("https://fsp-seed.s3-us-west-1.amazonaws.com/ariana.jpg") #ariana
profile3 = open("https://fsp-seed.s3-us-west-1.amazonaws.com/weeknd.jpg") #weeknd
profile4 = open("https://fsp-seed.s3-us-west-1.amazonaws.com/camila.jpg") #camila
profile5 = open("https://fsp-seed.s3-us-west-1.amazonaws.com/halsey.jpg") #halsey
# polyphia users
profile6 = open("https://fsp-seed.s3-us-west-1.amazonaws.com/polyphia.png") #polyphia
profile7 = open("https://fsp-seed.s3-us-west-1.amazonaws.com/tim.jpg") #tim
# kpop users
profile8 = open("https://fsp-seed.s3-us-west-1.amazonaws.com/Blackpink.png") #bp
profile9 = open("https://fsp-seed.s3-us-west-1.amazonaws.com/bts.jpg") #bts
profile10 = open("https://fsp-seed.s3-us-west-1.amazonaws.com/itzy.png") #itzy
profile11 = open("https://fsp-seed.s3-us-west-1.amazonaws.com/everglow.jpg") #everglow
profile12 = open("https://fsp-seed.s3-us-west-1.amazonaws.com/red+velvet.jpg") #red v
profile13 = open("https://fsp-seed.s3-us-west-1.amazonaws.com/taeyeon.jpg") #taeyeon
# lofi users
profile14 = open("https://fsp-seed.s3-us-west-1.amazonaws.com/tzelun.jpg") #tzelun
profile15 = open("https://fsp-seed.s3-us-west-1.amazonaws.com/lofty.jpg") #lofty
profile16 = open("https://fsp-seed.s3-us-west-1.amazonaws.com/tohaj.jpg") #tohaj
profile17 = open("https://fsp-seed.s3-us-west-1.amazonaws.com/bido.jpg") #bido
profile18 = open("https://fsp-seed.s3-us-west-1.amazonaws.com/lofi-girl.jpg") #lofi
# top dance users
profile19 = open("https://fsp-seed.s3-us-west-1.amazonaws.com/dua_lipa.jpg") #dua lipa
profile20 = open("https://fsp-seed.s3-us-west-1.amazonaws.com/kygo.jpg") #kygo
profile21 = open("https://fsp-seed.s3-us-west-1.amazonaws.com/Robin-Schulz.jpg") #robin
#fresh vibe users
profile22 = open("https://fsp-seed.s3-us-west-1.amazonaws.com/alle.jpg") #alle
profile23 = open("https://fsp-seed.s3-us-west-1.amazonaws.com/klingande.jpg") #kling
profile24 = open("https://fsp-seed.s3-us-west-1.amazonaws.com/lost+req.jpg") #lost freq
profile25 = open("https://fsp-seed.s3-us-west-1.amazonaws.com/ryyzn.jpg") #ryyzn
profile26 = open("https://fsp-seed.s3-us-west-1.amazonaws.com/rammor.jpg") #rammor

demo.profile_img.attach(io: profile1, filename: "#{demo.id} img")

arianaGrande.profile_img.attach(io: profile2, filename: "#{arianaGrande.id} img")
theWeeknd.profile_img.attach(io: profile3, filename: "#{theWeeknd.id} img")
camilaCabello.profile_img.attach(io: profile4, filename: "#{camilaCabello.id} img")
halsey.profile_img.attach(io: profile5, filename: "#{halsey.id} img")

polyphia.profile_img.attach(io: profile6, filename: "#{polyphia.id} img")
timHenson.profile_img.attach(io: profile7, filename: "#{timHenson.id} img")

blackPink.profile_img.attach(io: profile8, filename: "#{blackPink.id} img")
bts.profile_img.attach(io: profile9, filename: "#{bts.id} img")
itzy.profile_img.attach(io: profile10, filename: "#{itzy.id} img")
everglow.profile_img.attach(io: profile11, filename: "#{everglow.id} img")
redVelvet.profile_img.attach(io: profile12, filename: "#{redVelvet.id} img")
taeyeon.profile_img.attach(io: profile13, filename: "#{taeyeon.id} img")

tzelun.profile_img.attach(io: profile14, filename: "#{tzelun.id} img")
lofty.profile_img.attach(io: profile15, filename: "#{lofty.id} img")
tohaj.profile_img.attach(io: profile16, filename: "#{tohaj.id} img")
bido.profile_img.attach(io: profile17, filename: "#{bido.id} img")
stfspkn.profile_img.attach(io: profile18, filename: "#{stfspkn.id} img")

duaLipa.profile_img.attach(io: profile19, filename: "#{duaLipa.id} img")
kygo.profile_img.attach(io: profile20, filename: "#{kygo.id} img")
robinSchulz.profile_img.attach(io: profile21, filename: "#{robinSchulz.id} img")

alleFarben.profile_img.attach(io: profile22, filename: "#{alleFarben.id} img")
klingande.profile_img.attach(io: profile23, filename: "#{klingande.id} img")
lostFrequencies.profile_img.attach(io: profile24, filename: "#{lostFrequencies.id} img")
ryyzn.profile_img.attach(io: profile25, filename: "#{ryyzn.id} img")
rammor.profile_img.attach(io: profile26, filename: "#{rammor.id} img")

dance_track1 = Track.new(title: "Break My Heart", uploader_id: duaLipa.id, description: "Don't break my heart", genre: "House")
dance_track2 = Track.new(title: "Hallucinate", uploader_id: duaLipa.id, description: "Are you hallucinating?", genre: "House")
dance_track3 = Track.new(title: "Levitating", uploader_id: duaLipa.id, description: "Float like a butterfly", genre: "House")
dance_track4 = Track.new(title: "Donna Summer - Hot Stuff (Remix)", uploader_id: kygo.id, description: "🔥🔥🔥HOT🔥🔥🔥", genre: "House")
dance_track5 = Track.new(title: "Whitney Houston - Higher Love (Remix)", uploader_id: kygo.id, description: "Remix of an oldie", genre: "House")
dance_track6 = Track.new(title: "Right Now ft. Nick Jonas", uploader_id: robinSchulz.id, description: "Your heart is all I need", genre: "House")
dance_track7 = Track.new(title: "Sugar ft. Francesco Yates", uploader_id: robinSchulz.id, description: "Sweet groove", genre: "House")

dance_track1_photo = open("https://fsp-seed.s3-us-west-1.amazonaws.com/futur+e+nostalgia.jpg")
dance_track2_photo = open("https://fsp-seed.s3-us-west-1.amazonaws.com/futur+e+nostalgia.jpg")
dance_track3_photo = open("https://fsp-seed.s3-us-west-1.amazonaws.com/moonlight.jpg")
dance_track4_photo = open("https://fsp-seed.s3-us-west-1.amazonaws.com/hot+stuff.jpg")
dance_track5_photo = open("https://fsp-seed.s3-us-west-1.amazonaws.com/higher+love.jpg")
dance_track6_photo = open("https://fsp-seed.s3-us-west-1.amazonaws.com/right+now.jpg")
dance_track7_photo = open("https://fsp-seed.s3-us-west-1.amazonaws.com/sugar.jpg")

dance_track1_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Dua+Lipa++Break+My+Heart+Lyrics.mp3")
dance_track2_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Dua+Lipa++Hallucinate+Official+Lyrics+Video.mp3")
dance_track3_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Dua+Lipa++Levitating+Feat+DaBaby+Lyrics.mp3")
dance_track4_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Kygo+Donna+Summer++Hot+Stuff+Lyrics.mp3")
dance_track5_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Kygo+Whitney+Houston++Higher+Love+Audio.mp3")
dance_track6_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Nick+Jonas+Robin+Schulz++Right+Now.mp3")
dance_track7_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Robin+Schulz++Sugar+feat+Francesco+Yates+Official+Lyric+Video.mp3")

dance_track1.audio_file.attach(io: dance_track1_audio, filename: "dance#{dance_track1.id}.mp3")
dance_track2.audio_file.attach(io: dance_track2_audio, filename: "dance#{dance_track2.id}.mp3")
dance_track3.audio_file.attach(io: dance_track3_audio, filename: "dance#{dance_track3.id}.mp3")
dance_track4.audio_file.attach(io: dance_track4_audio, filename: "dance#{dance_track4.id}.mp3")
dance_track5.audio_file.attach(io: dance_track5_audio, filename: "dance#{dance_track5.id}.mp3")
dance_track6.audio_file.attach(io: dance_track6_audio, filename: "dance#{dance_track6.id}.mp3")
dance_track7.audio_file.attach(io: dance_track7_audio, filename: "dance#{dance_track7.id}.mp3")

dance_track1.photo_file.attach(io: dance_track1_photo, filename: "dance#{dance_track1.id} img")
dance_track2.photo_file.attach(io: dance_track2_photo, filename: "dance#{dance_track2.id} img")
dance_track3.photo_file.attach(io: dance_track3_photo, filename: "dance#{dance_track3.id} img")
dance_track4.photo_file.attach(io: dance_track4_photo, filename: "dance#{dance_track4.id} img")
dance_track5.photo_file.attach(io: dance_track5_photo, filename: "dance#{dance_track5.id} img")
dance_track6.photo_file.attach(io: dance_track6_photo, filename: "dance#{dance_track6.id} img")
dance_track7.photo_file.attach(io: dance_track7_photo, filename: "dance#{dance_track7.id} img")

dance_track1.save!
dance_track2.save!
dance_track3.save!
dance_track4.save!
dance_track5.save!
dance_track6.save!
dance_track7.save!

vibe_track1 = Track.new(title: "Fading ft. ILIRA", uploader_id: alleFarben.id, description: "Fading into you", genre: "House")
vibe_track2 = Track.new(title: "Happy Now", uploader_id: kygo.id, description: "I hope you'll be happy now", genre: "House")
vibe_track3 = Track.new(title: "Jubel", uploader_id: klingande.id, description: "Vibe for the summer!!!", genre: "House")
vibe_track4 = Track.new(title: "Are You With Me", uploader_id: lostFrequencies.id, description: "I wanna dance by water 'neath the Mexican sky", genre: "House")
vibe_track5 = Track.new(title: "Night Light", uploader_id: ryyzn.id, description: "Just stay the night", genre: "House")
vibe_track6 = Track.new(title: "Searching For You", uploader_id: rammor.id, description: "We can fly away to a higher place", genre: "House")
vibe_track7 = Track.new(title: "Sun Goes Down ft. Jasmine Thompson", uploader_id: robinSchulz.id, description: "Nothings ever what we expect", genre: "House")

vibe_track1_photo = open("https://fsp-seed.s3-us-west-1.amazonaws.com/fading.jpg")#fading
vibe_track2_photo = open("https://fsp-seed.s3-us-west-1.amazonaws.com/happy+now.png")#happy now
vibe_track3_photo = open("https://fsp-seed.s3-us-west-1.amazonaws.com/jubel.jpg")#jubel
vibe_track4_photo = open("https://fsp-seed.s3-us-west-1.amazonaws.com/are+you+with+me.jpg")# r u with me
vibe_track5_photo = open("https://fsp-seed.s3-us-west-1.amazonaws.com/warning+sign.jpg")#warning sign
vibe_track6_photo = open("https://fsp-seed.s3-us-west-1.amazonaws.com/searhing.jpg")#searching
vibe_track7_photo = open("https://fsp-seed.s3-us-west-1.amazonaws.com/sun+goes+down.jpg")#sun goes down

vibe_track1_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Alle+Farben-+Fading.mp3")
vibe_track2_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Happy+Now+by+kygo.mp3")
vibe_track3_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Jubel+by+Klingande.mp3")
vibe_track4_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Lost+Frequencies++-+Are+You+With+Me.mp3")
vibe_track5_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+RYYZN+-++Night+Light.mp3")
vibe_track6_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Rammor-+Searching+For+You.mp3")
vibe_track7_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Robin+Schulz++-+Sun+Goes+Down+feat+Jasmine+Thompson.mp3")

vibe_track1.audio_file.attach(io: vibe_track1_audio, filename: "vibe#{vibe_track1.id}.mp3")
vibe_track2.audio_file.attach(io: vibe_track2_audio, filename: "vibe#{vibe_track2.id}.mp3")
vibe_track3.audio_file.attach(io: vibe_track3_audio, filename: "vibe#{vibe_track3.id}.mp3")
vibe_track4.audio_file.attach(io: vibe_track4_audio, filename: "vibe#{vibe_track4.id}.mp3")
vibe_track5.audio_file.attach(io: vibe_track5_audio, filename: "vibe#{vibe_track5.id}.mp3")
vibe_track6.audio_file.attach(io: vibe_track6_audio, filename: "vibe#{vibe_track6.id}.mp3")
vibe_track7.audio_file.attach(io: vibe_track7_audio, filename: "vibe#{vibe_track7.id}.mp3")

vibe_track1.photo_file.attach(io: vibe_track1_photo, filename: "vibe#{vibe_track1.id} img")
vibe_track2.photo_file.attach(io: vibe_track2_photo, filename: "vibe#{vibe_track2.id} img")
vibe_track3.photo_file.attach(io: vibe_track3_photo, filename: "vibe#{vibe_track3.id} img")
vibe_track4.photo_file.attach(io: vibe_track4_photo, filename: "vibe#{vibe_track4.id} img")
vibe_track5.photo_file.attach(io: vibe_track5_photo, filename: "vibe#{vibe_track5.id} img")
vibe_track6.photo_file.attach(io: vibe_track6_photo, filename: "vibe#{vibe_track6.id} img")
vibe_track7.photo_file.attach(io: vibe_track7_photo, filename: "vibe#{vibe_track7.id} img")

vibe_track1.save!
vibe_track2.save!
vibe_track3.save!
vibe_track4.save!
vibe_track5.save!
vibe_track6.save!
vibe_track7.save!

lofi_track1 = Track.new(title: "Trauerfall", uploader_id: tzelun.id, description: "<3",genre: "Lofi")
lofi_track2 = Track.new(title: "Searching", uploader_id: tzelun.id, description: "I'm still searching", genre: "Lofi")
lofi_track3 = Track.new(title: "Watch What I Do", uploader_id: tzelun.id, description: "Hope you're watching", genre: "Lofi")
lofi_track4 = Track.new(title: "Loves Dissonance", uploader_id: lofty.id, description: "Love", genre: "Lofi")
lofi_track5 = Track.new(title: "Motu One", uploader_id: tohaj.id, description: "Just dropping some vibes", genre: "Lofi")
lofi_track6 = Track.new(title: "What Could've Been", uploader_id: stfspkn.id, description: "And what should never be", genre: "Lofi")
lofi_track7 = Track.new(title: "Remind", uploader_id: bido.id, description: "Just remind me when you need be to drop another one", genre: "Lofi")

lofi_track1_photo = open("https://fsp-seed.s3-us-west-1.amazonaws.com/lofi1.jpg")
lofi_track2_photo = open("https://fsp-seed.s3-us-west-1.amazonaws.com/lofi2.jpg")
lofi_track3_photo = open("https://fsp-seed.s3-us-west-1.amazonaws.com/lofi3.jpg")
lofi_track4_photo = open("https://fsp-seed.s3-us-west-1.amazonaws.com/lofi+4.jpg")
lofi_track5_photo = open("https://fsp-seed.s3-us-west-1.amazonaws.com/lofi+5.jpg")
lofi_track6_photo = open("https://fsp-seed.s3-us-west-1.amazonaws.com/lofi6.jpeg")
lofi_track7_photo = open("https://fsp-seed.s3-us-west-1.amazonaws.com/lofi7.jpg")

lofi_track1_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+E+I+S+U++Trauerfall+w+Tzelun.mp3")
lofi_track2_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Searching+by+Tzelun.mp3")
lofi_track3_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Watch+What+I+Do+by+Tzelun.mp3")
lofi_track4_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Loves+Dissonance+Original+Mix+by+Lofty.mp3")
lofi_track5_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Motu+One+by+tohaj.mp3")
lofi_track6_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+sftspkn++what+couldve+been.mp3")
lofi_track7_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Remind+by+Bido.mp3")

lofi_track1.audio_file.attach(io: lofi_track1_audio, filename: "lofi#{lofi_track1.id}.mp3")
lofi_track2.audio_file.attach(io: lofi_track2_audio, filename: "lofi#{lofi_track2.id}.mp3")
lofi_track3.audio_file.attach(io: lofi_track3_audio, filename: "lofi#{lofi_track3.id}.mp3")
lofi_track4.audio_file.attach(io: lofi_track4_audio, filename: "lofi#{lofi_track4.id}.mp3")
lofi_track5.audio_file.attach(io: lofi_track5_audio, filename: "lofi#{lofi_track5.id}.mp3")
lofi_track6.audio_file.attach(io: lofi_track6_audio, filename: "lofi#{lofi_track6.id}.mp3")
lofi_track7.audio_file.attach(io: lofi_track7_audio, filename: "lofi#{lofi_track7.id}.mp3")

lofi_track1.photo_file.attach(io: lofi_track1_photo, filename: "lofi#{lofi_track1.id} img")
lofi_track2.photo_file.attach(io: lofi_track2_photo, filename: "lofi#{lofi_track2.id} img")
lofi_track3.photo_file.attach(io: lofi_track3_photo, filename: "lofi#{lofi_track3.id} img")
lofi_track4.photo_file.attach(io: lofi_track4_photo, filename: "lofi#{lofi_track4.id} img")
lofi_track5.photo_file.attach(io: lofi_track5_photo, filename: "lofi#{lofi_track5.id} img")
lofi_track6.photo_file.attach(io: lofi_track6_photo, filename: "lofi#{lofi_track6.id} img")
lofi_track7.photo_file.attach(io: lofi_track7_photo, filename: "lofi#{lofi_track7.id} img")

lofi_track1.save!
lofi_track2.save!
lofi_track3.save!
lofi_track4.save!
lofi_track5.save!
lofi_track6.save!
lofi_track7.save!

kpop_track1 = Track.new(title: "DDUDU DDUDU", uploader_id: blackPink.id, description: "~DDDUUDDDUUDDDUU~", genre: "Kpop")
kpop_track2 = Track.new(title: "How You Like That", uploader_id: blackPink.id, description: "Blackpink in your area", genre: "Kpop")
kpop_track3 = Track.new(title: "Lovesick Girls", uploader_id: blackPink.id, description: "We are the lovesick girls", genre: "Kpop")
kpop_track4 = Track.new(title: "Boy With Luv ft. Halsey", uploader_id: bts.id, description: "New song with Halsey!", genre: "Kpop")
kpop_track5 = Track.new(title: "Dynamite", uploader_id: bts.id, description: "Beat for the summer", genre: "Kpop")
kpop_track6 = Track.new(title: "La Di Da", uploader_id: everglow.id, description: "We're about to break the charts with this", genre: "Kpop")
kpop_track7 = Track.new(title: "Wannabe", uploader_id: itzy.id, description: "I just wanna be me", genre: "Kpop")
kpop_track8 = Track.new(title: "Psycho", uploader_id: redVelvet.id, description: "Smooth", genre: "Kpop")
kpop_track9 = Track.new(title: "Spark", uploader_id: taeyeon.id, description: "Purpose", genre: "Kpop")

kpop_track1_photo = open("https://fsp-seed.s3-us-west-1.amazonaws.com/square+up.jpg")
kpop_track2_photo = open("https://fsp-seed.s3-us-west-1.amazonaws.com/BLACKPINK-_The_Album.png")
kpop_track3_photo = open("https://fsp-seed.s3-us-west-1.amazonaws.com/BLACKPINK-_The_Album.png")
kpop_track4_photo = open("https://fsp-seed.s3-us-west-1.amazonaws.com/daytime.jpg")
kpop_track5_photo = open("https://fsp-seed.s3-us-west-1.amazonaws.com/persona.jpg")
kpop_track6_photo = open("https://fsp-seed.s3-us-west-1.amazonaws.com/everglow+album.jpg")
kpop_track7_photo = open("https://fsp-seed.s3-us-west-1.amazonaws.com/itz+me.png")
kpop_track8_photo = open("https://fsp-seed.s3-us-west-1.amazonaws.com/finale.jpg")
kpop_track9_photo = open("https://fsp-seed.s3-us-west-1.amazonaws.com/purpose.png")

kpop_track1_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+BLACKPINK++DDUDU+DDUDU+%EB%9A%9C%EB%91%90%EB%9A%9C%EB%91%90+LYRICS+Color+Coded+EngRomHan.mp3") 
kpop_track2_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+BLACKPINK+How+You+Like+That+Color+Coded+Lyrics+EngRomHan%EA%B0%80%EC%82%AC.mp3") 
kpop_track3_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+BLACKPINK+Lovesick+Girls+Lyrics+Color+Coded+Lyrics.mp3") 
kpop_track4_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+BTS+%EB%B0%A9%ED%83%84%EC%86%8C%EB%85%84%EB%8B%A8+ft+Halsey++Boy+With+Luv+Lyrics+EngRomHan%EA%B0%80%EC%82%AC.mp3") 
kpop_track5_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+BTS++Dynamite+Lyrics.mp3") 
kpop_track6_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+LA+DI+DA.mp3") 
kpop_track7_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+ITZY+WANNABE+MV.mp3") 
kpop_track8_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Psycho.mp3") 
kpop_track9_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+TAEYEON+%ED%83%9C%EC%97%B0+%EB%B6%88%ED%8B%B0+Spark+MV.mp3") 

kpop_track1.audio_file.attach(io: kpop_track1_audio, filename: "kpop#{kpop_track1.id}.mp3")
kpop_track2.audio_file.attach(io: kpop_track2_audio, filename: "kpop#{kpop_track2.id}.mp3")
kpop_track3.audio_file.attach(io: kpop_track3_audio, filename: "kpop#{kpop_track3.id}.mp3")
kpop_track4.audio_file.attach(io: kpop_track4_audio, filename: "kpop#{kpop_track4.id}.mp3")
kpop_track5.audio_file.attach(io: kpop_track5_audio, filename: "kpop#{kpop_track5.id}.mp3")
kpop_track6.audio_file.attach(io: kpop_track6_audio, filename: "kpop#{kpop_track6.id}.mp3")
kpop_track7.audio_file.attach(io: kpop_track7_audio, filename: "kpop#{kpop_track7.id}.mp3")
kpop_track8.audio_file.attach(io: kpop_track8_audio, filename: "kpop#{kpop_track8.id}.mp3")
kpop_track9.audio_file.attach(io: kpop_track9_audio, filename: "kpop#{kpop_track9.id}.mp3")

kpop_track1.photo_file.attach(io: kpop_track1_photo, filename: "kpop#{kpop_track1.id} img")
kpop_track2.photo_file.attach(io: kpop_track2_photo, filename: "kpop#{kpop_track2.id} img")
kpop_track3.photo_file.attach(io: kpop_track3_photo, filename: "kpop#{kpop_track3.id} img")
kpop_track4.photo_file.attach(io: kpop_track4_photo, filename: "kpop#{kpop_track4.id} img")
kpop_track5.photo_file.attach(io: kpop_track5_photo, filename: "kpop#{kpop_track5.id} img")
kpop_track6.photo_file.attach(io: kpop_track6_photo, filename: "kpop#{kpop_track6.id} img")
kpop_track7.photo_file.attach(io: kpop_track7_photo, filename: "kpop#{kpop_track7.id} img")
kpop_track8.photo_file.attach(io: kpop_track8_photo, filename: "kpop#{kpop_track8.id} img")
kpop_track9.photo_file.attach(io: kpop_track9_photo, filename: "kpop#{kpop_track9.id} img")

kpop_track1.save!
kpop_track2.save!
kpop_track3.save!
kpop_track4.save!
kpop_track5.save!
kpop_track6.save!
kpop_track7.save!
kpop_track8.save!
kpop_track9.save!

polyphia_track2 = Track.new(title: "G.O.A.T", uploader_id: polyphia.id, description: "Meet Timi Hendrix", genre: "Instrumental")
polyphia_track5 = Track.new(title: "Saucy", uploader_id: polyphia.id, description: "This is nasty", genre: "Instrumental")
polyphia_track7 = Track.new(title: "Yas ft. Mario Camarena and Erick Hansel", uploader_id: polyphia.id, description: "Collab with Chon", genre: "Instrumental")
polyphia_track3 = Track.new(title: "Goose", uploader_id: polyphia.id, description: "It's Grey Goose, baby!", genre: "Instrumental")
polyphia_track6 = Track.new(title: "The Worst", uploader_id: polyphia.id, description: "wr6st", genre: "Instrumental")
polyphia_track1 = Track.new(title: "Light", uploader_id: polyphia.id, description: "this is lit", genre: "Instrumental")
polyphia_track4 = Track.new(title: "James Franco", uploader_id: polyphia.id, description: "Is he related to Dave Franco?", genre: "Instrumental")
polyphia_track8 = Track.new(title: "Blood Moon", uploader_id: timHenson.id, description: "Betcha can't play this", genre: "Instrumental")

polyphia_track1_photo = open("https://fsp-seed.s3-us-west-1.amazonaws.com/Polyphia-Renaissance-cover.jpg")
polyphia_track2_photo = open('https://fsp-seed.s3-us-west-1.amazonaws.com/nlnd.jpg')
polyphia_track3_photo = open("https://fsp-seed.s3-us-west-1.amazonaws.com/most+hated.jpg")
polyphia_track4_photo = open("https://fsp-seed.s3-us-west-1.amazonaws.com/muse.jpg")
polyphia_track5_photo = open('https://fsp-seed.s3-us-west-1.amazonaws.com/nlnd.jpg')
polyphia_track6_photo = open("https://fsp-seed.s3-us-west-1.amazonaws.com/most+hated.jpg")
polyphia_track7_photo = open('https://fsp-seed.s3-us-west-1.amazonaws.com/nlnd.jpg')
polyphia_track8_photo = open("https://fsp-seed.s3-us-west-1.amazonaws.com/bloodmoon.jpg")

polyphia_track1_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Light++Polyphia+Official+Audio.mp3")
polyphia_track2_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Polyphia++GOAT+Official+Music+Video.mp3")
polyphia_track3_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Polyphia++Goose+Official+Music+Video.mp3")
polyphia_track4_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Polyphia++James+Franco.mp3")
polyphia_track5_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Polyphia++Saucy.mp3")
polyphia_track6_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Polyphia++The+Worst+Official+Audio.mp3")
polyphia_track7_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Polyphia++Yas+feat+Mario+Camarena+and+Erick+Hansel+Official+Music+Video.mp3")
polyphia_track8_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Blood+Moon.mp3")

polyphia_track1.audio_file.attach(io: polyphia_track1_audio, filename: "polyphia#{polyphia_track1.id}.mp3")
polyphia_track2.audio_file.attach(io: polyphia_track2_audio, filename: "polyphia#{polyphia_track2.id}.mp3")
polyphia_track3.audio_file.attach(io: polyphia_track3_audio, filename: "polyphia#{polyphia_track3.id}.mp3")
polyphia_track4.audio_file.attach(io: polyphia_track4_audio, filename: "polyphia#{polyphia_track4.id}.mp3")
polyphia_track5.audio_file.attach(io: polyphia_track5_audio, filename: "polyphia#{polyphia_track5.id}.mp3")
polyphia_track6.audio_file.attach(io: polyphia_track6_audio, filename: "polyphia#{polyphia_track6.id}.mp3")
polyphia_track7.audio_file.attach(io: polyphia_track7_audio, filename: "polyphia#{polyphia_track7.id}.mp3")
polyphia_track8.audio_file.attach(io: polyphia_track8_audio, filename: "polyphia#{polyphia_track8.id}.mp3")

polyphia_track1.photo_file.attach(io: polyphia_track1_photo, filename: "polyphia#{polyphia_track1.id} img")
polyphia_track2.photo_file.attach(io: polyphia_track2_photo, filename: "polyphia#{polyphia_track2.id} img")
polyphia_track3.photo_file.attach(io: polyphia_track3_photo, filename: "polyphia#{polyphia_track3.id} img")
polyphia_track4.photo_file.attach(io: polyphia_track4_photo, filename: "polyphia#{polyphia_track4.id} img")
polyphia_track5.photo_file.attach(io: polyphia_track5_photo, filename: "polyphia#{polyphia_track5.id} img")
polyphia_track6.photo_file.attach(io: polyphia_track6_photo, filename: "polyphia#{polyphia_track6.id} img")
polyphia_track7.photo_file.attach(io: polyphia_track7_photo, filename: "polyphia#{polyphia_track7.id} img")
polyphia_track8.photo_file.attach(io: polyphia_track8_photo, filename: "polyphia#{polyphia_track8.id} img")

polyphia_track2.save!
polyphia_track5.save!
polyphia_track7.save!
polyphia_track3.save!
polyphia_track6.save!
polyphia_track1.save!
polyphia_track4.save!
polyphia_track8.save!

# user1.save!
# track1 = Track.create!(title: "hello", uploader_id: demo.id, description: "hhahaha", genre: "duh")

topHits_track9 = Track.new(title: "Save Your Tears", uploader_id: theWeeknd.id, description: "I saw you dancing in a crowded room", genre: "R&B")
topHits_track8 = Track.new(title: "Blinding Lights", uploader_id: theWeeknd.id, description: "Lights are very bright!", genre: "R&B")
topHits_track7 = Track.new(title: "In Your Eyes", uploader_id: theWeeknd.id, description: "I just pretend that I'm in the dark", genre: "R&B")
topHits_track6 = Track.new(title: "Be Kind", uploader_id: halsey.id, description: "Be kind to the one that you love!", genre: "Pop")
topHits_track5 = Track.new(title: "Without Me", uploader_id: halsey.id, description: "Found you when your heart was broken", genre: "Pop")
topHits_track4 = Track.new(title: "Senorita", uploader_id: camilaCabello.id, description: "Check out my collab with Shawn Mendes!!", genre: "Pop")
topHits_track3 = Track.new(title: "Havana", uploader_id: camilaCabello.id, description: "Come to Havana with me!", genre: "Pop")
topHits_track2 = Track.new(title: "Positions", uploader_id: arianaGrande.id, description: "Heaven sent you to me", genre: "Pop")
topHits_track1 = Track.new(title: "7 Rings", uploader_id: arianaGrande.id, description: "Breakfast at Tiffany's", genre: "Pop")

topHits_track1_photo = open("https://fsp-seed.s3-us-west-1.amazonaws.com/Thank_U%2C_Next_-_Digital_Version.jpg")
topHits_track2_photo = open('https://fsp-seed.s3-us-west-1.amazonaws.com/positions.png')
topHits_track3_photo = open('https://fsp-seed.s3-us-west-1.amazonaws.com/cc.jpg')
topHits_track4_photo = open('https://fsp-seed.s3-us-west-1.amazonaws.com/senorita.jpg')
topHits_track5_photo = open("https://fsp-seed.s3-us-west-1.amazonaws.com/Halsey_-_Manic.png")
topHits_track6_photo = open("https://fsp-seed.s3-us-west-1.amazonaws.com/be+kind+img.jpg")
topHits_track7_photo = open("https://fsp-seed.s3-us-west-1.amazonaws.com/The_Weeknd_-_After_Hours.png")
topHits_track8_photo = open("https://fsp-seed.s3-us-west-1.amazonaws.com/The_Weeknd_-_After_Hours.png")
topHits_track9_photo = open("https://fsp-seed.s3-us-west-1.amazonaws.com/The_Weeknd_-_After_Hours.png")

topHits_track1_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Ariana+Grande++7+rings+Lyrics.mp3")
topHits_track2_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Ariana+Grande++positions+Lyrics.mp3")
topHits_track3_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Camila+Cabello++Havana+Official+Audio+ft+Young+Thug.mp3")
topHits_track4_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Shawn+Mendes+Camila+Cabello++Se%C3%B1orita+Lyrics.mp3")
topHits_track5_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Halsey++Without+Me+Lyrics.mp3")
topHits_track6_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Marshmello+Halsey++Be+Kind+Halsey+Lyric+Video.mp3")
topHits_track7_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+In+Your+Eyes.mp3")
topHits_track8_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Blinding+Lights.mp3")
topHits_track9_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+The+Weeknd++Save+Your+Tears+Audio.mp3")

topHits_track1.audio_file.attach(io: topHits_track1_audio, filename: "topHits#{topHits_track1.id}.mp3")
topHits_track2.audio_file.attach(io: topHits_track2_audio, filename: "topHits#{topHits_track2.id}.mp3")
topHits_track3.audio_file.attach(io: topHits_track3_audio, filename: "topHits#{topHits_track3.id}.mp3")
topHits_track4.audio_file.attach(io: topHits_track4_audio, filename: "topHits#{topHits_track4.id}.mp3")
topHits_track5.audio_file.attach(io: topHits_track5_audio, filename: "topHits#{topHits_track5.id}.mp3")
topHits_track6.audio_file.attach(io: topHits_track6_audio, filename: "topHits#{topHits_track6.id}.mp3")
topHits_track7.audio_file.attach(io: topHits_track7_audio, filename: "topHits#{topHits_track7.id}.mp3")
topHits_track8.audio_file.attach(io: topHits_track8_audio, filename: "topHits#{topHits_track8.id}.mp3")
topHits_track9.audio_file.attach(io: topHits_track9_audio, filename: "topHits#{topHits_track9.id}.mp3")

topHits_track1.photo_file.attach(io: topHits_track1_photo, filename: "topHits#{topHits_track1.id} img")
topHits_track2.photo_file.attach(io: topHits_track2_photo, filename: "topHits#{topHits_track2.id} img")
topHits_track3.photo_file.attach(io: topHits_track3_photo, filename: "topHits#{topHits_track3.id} img")
topHits_track4.photo_file.attach(io: topHits_track4_photo, filename: "topHits#{topHits_track4.id} img")
topHits_track5.photo_file.attach(io: topHits_track5_photo, filename: "topHits#{topHits_track5.id} img")
topHits_track6.photo_file.attach(io: topHits_track6_photo, filename: "topHits#{topHits_track6.id} img")
topHits_track7.photo_file.attach(io: topHits_track7_photo, filename: "topHits#{topHits_track7.id} img")
topHits_track8.photo_file.attach(io: topHits_track8_photo, filename: "topHits#{topHits_track8.id} img")
topHits_track9.photo_file.attach(io: topHits_track9_photo, filename: "topHits#{topHits_track9.id} img")

topHits_track9.save!
topHits_track8.save!
topHits_track7.save!
topHits_track6.save!
topHits_track5.save!
topHits_track4.save!
topHits_track3.save!
topHits_track2.save!
topHits_track1.save!


# top hits comments

comment1 = Comment.create!(body: "wow this is a hit", track_id: topHits_track1.id, uploader_id: alleFarben.id)
comment2 = Comment.create!(body: "too much talent omg", track_id: topHits_track1.id, uploader_id: everglow.id)
comment3 = Comment.create!(body: "we need to collab", track_id: topHits_track1.id, uploader_id: duaLipa.id)
comment4 = Comment.create!(body: "wow 😍", track_id: topHits_track1.id, uploader_id: theWeeknd.id)
comment5 = Comment.create!(body: "DOPE!!!!", track_id: topHits_track1.id, uploader_id: rammor.id)

comment6 = Comment.create!(body: "who would dislike this song?", track_id: topHits_track2.id, uploader_id: duaLipa.id)
comment7 = Comment.create!(body: "still listening 2021!!!", track_id: topHits_track2.id, uploader_id: tzelun.id)
comment8 = Comment.create!(body: "I freakin luv this song", track_id: topHits_track2.id, uploader_id: klingande.id)
comment9 = Comment.create!(body: "one of the best of all time", track_id: topHits_track2.id, uploader_id: blackPink.id)
comment10 = Comment.create!(body: "can't wait to see you live", track_id: topHits_track2.id, uploader_id: theWeeknd.id)

comment11 = Comment.create!(body: "gotta sample this! TOO good!!", track_id: topHits_track3.id, uploader_id: robinSchulz.id)
comment12 = Comment.create!(body: "wow", track_id: topHits_track3.id, uploader_id: bts.id)
comment13 = Comment.create!(body: "😍😍😍", track_id: topHits_track3.id, uploader_id: alleFarben.id)
comment14 = Comment.create!(body: "🧡🧡🧡🧡🧡", track_id: topHits_track3.id, uploader_id: bido.id)
comment15 = Comment.create!(body: "putting this on repeat", track_id: topHits_track3.id, uploader_id: polyphia.id)

comment16 = Comment.create!(body: "DOPE!!!!", track_id: topHits_track4.id, uploader_id: arianaGrande.id)
comment17 = Comment.create!(body: "gotta sample this! TOO good!!", track_id: topHits_track4.id, uploader_id: taeyeon.id)
comment18 = Comment.create!(body: "one of the best of all time", track_id: topHits_track4.id, uploader_id: kygo.id)
comment19 = Comment.create!(body: "can't wait to see you live", track_id: topHits_track4.id, uploader_id: demo.id)
comment20 = Comment.create!(body: "too much talent omg", track_id: topHits_track4.id, uploader_id: halsey.id)

comment21 = Comment.create!(body: "much talent", track_id: topHits_track5.id, uploader_id: ryyzn.id)
comment22 = Comment.create!(body: "please do a USA tour soon!", track_id: topHits_track5.id, uploader_id: stfspkn.id)
comment23 = Comment.create!(body: "nothings gonna kill my vibe with this on", track_id: topHits_track5.id, uploader_id: redVelvet.id)
comment24 = Comment.create!(body: "the best medicine", track_id: topHits_track5.id, uploader_id: timHenson.id)
comment25 = Comment.create!(body: "was just playing Minecraft and now im here", track_id: topHits_track5.id, uploader_id: theWeeknd.id)

comment26 = Comment.create!(body: "hit me up for a collab", track_id: topHits_track6.id, uploader_id: lostFrequencies.id)
comment27 = Comment.create!(body: "listening to this in the car", track_id: topHits_track6.id, uploader_id: klingande.id)
comment28 = Comment.create!(body: "🔥🔥🔥HOT🔥🔥🔥", track_id: topHits_track6.id, uploader_id: bido.id)
comment29 = Comment.create!(body: "gotta sample this! TOO good!!", track_id: topHits_track6.id, uploader_id: taeyeon.id)
comment30 = Comment.create!(body: "I freakin luv this song", track_id: topHits_track6.id, uploader_id: itzy.id)

comment31 = Comment.create!(body: "wow, the entire quarantine situation just got a whole lot better", track_id: topHits_track7.id, uploader_id: stfspkn.id)
comment32 = Comment.create!(body: "this dropped my stress-level by a multiple of 10", track_id: topHits_track7.id, uploader_id: tohaj.id)
comment33 = Comment.create!(body: "feels like I’m floating in the clouds", track_id: topHits_track7.id, uploader_id: kygo.id)
comment34 = Comment.create!(body: "thanks for releasing this", track_id: topHits_track7.id, uploader_id: rammor.id)
comment35 = Comment.create!(body: "did not disappoint", track_id: topHits_track7.id, uploader_id: arianaGrande.id)

comment36 = Comment.create!(body: "too much talent omg", track_id: topHits_track8.id, uploader_id: lostFrequencies.id)
comment37 = Comment.create!(body: "gotta sample this! TOO good!!", track_id: topHits_track8.id, uploader_id: lofty.id)
comment38 = Comment.create!(body: "the best medicine", track_id: topHits_track8.id, uploader_id: halsey.id)
comment39 = Comment.create!(body: "hit me up for a collab", track_id: topHits_track8.id, uploader_id: polyphia.id)
comment40 = Comment.create!(body: "putting this on repeat now", track_id: topHits_track8.id, uploader_id: kygo.id)

comment41 = Comment.create!(body: "this dude is super talented", track_id: topHits_track9.id, uploader_id: blackPink.id)
comment42 = Comment.create!(body: "no matter how much I listen to this it never gets old", track_id: topHits_track9.id, uploader_id: alleFarben.id)
comment43 = Comment.create!(body: "heaven to my soul", track_id: topHits_track9.id, uploader_id: ryyzn.id)
comment44 = Comment.create!(body: "🔥🔥🔥HOT🔥🔥🔥", track_id: topHits_track9.id, uploader_id: robinSchulz.id)
comment45 = Comment.create!(body: "wow 😍", track_id: topHits_track9.id, uploader_id: camilaCabello.id)

# polyphia comments

comment46 = Comment.create!(body: "giga chad", track_id: polyphia_track1.id, uploader_id: everglow.id)
comment47 = Comment.create!(body: "much talent wowowow", track_id: polyphia_track1.id, uploader_id: lofty.id)
comment48 = Comment.create!(body: "🔥🔥🔥HOT🔥🔥🔥", track_id: polyphia_track1.id, uploader_id: kygo.id)
comment49 = Comment.create!(body: "putting this on repeat now", track_id: polyphia_track1.id, uploader_id: bts.id)
comment50 = Comment.create!(body: "was just playing Minecraft and now im here", track_id: polyphia_track1.id, uploader_id: camilaCabello.id)

comment51 = Comment.create!(body: "love the guitar work", track_id: polyphia_track2.id, uploader_id: tzelun.id)
comment52 = Comment.create!(body: "mix is incredible", track_id: polyphia_track2.id, uploader_id: halsey.id)
comment53 = Comment.create!(body: "hit me up for a collab", track_id: polyphia_track2.id, uploader_id: theWeeknd.id)
comment54 = Comment.create!(body: "please do a USA tour soon!", track_id: polyphia_track2.id, uploader_id: klingande.id)
comment55 = Comment.create!(body: "one of the best of all time", track_id: polyphia_track2.id, uploader_id: alleFarben.id)


comment56 = Comment.create!(body: "how is that tone POSSIBLE?", track_id: polyphia_track3.id, uploader_id: arianaGrande.id)
comment57 = Comment.create!(body: "gotta sample this! TOO good!!", track_id: polyphia_track3.id, uploader_id: duaLipa.id)
comment58 = Comment.create!(body: "wow 😍", track_id: polyphia_track3.id, uploader_id: ryyzn.id)
comment59 = Comment.create!(body: "did not disappoint", track_id: polyphia_track3.id, uploader_id: lostFrequencies.id)
comment60 = Comment.create!(body: "no matter how much I listen to this it never gets old", track_id: polyphia_track3.id, uploader_id: robinSchulz.id)

comment61 = Comment.create!(body: "love the guitars", track_id: polyphia_track4.id, uploader_id: stfspkn.id)
comment62 = Comment.create!(body: "best track in the album", track_id: polyphia_track4.id, uploader_id: camilaCabello.id)
comment63 = Comment.create!(body: "putting this on repeat", track_id: polyphia_track4.id, uploader_id: bido.id)
comment64 = Comment.create!(body: "wow, the entire quarantine situation just got a whole lot better", track_id: polyphia_track4.id, uploader_id: ryyzn.id)
comment65 = Comment.create!(body: "gotta catch you guys on the next tour wow", track_id: polyphia_track4.id, uploader_id: rammor.id)

comment66 = Comment.create!(body: "🔥🔥🔥HOT🔥🔥🔥", track_id: polyphia_track5.id, uploader_id: tohaj.id)
comment67 = Comment.create!(body: "masterpiece", track_id: polyphia_track5.id, uploader_id: arianaGrande.id)
comment68 = Comment.create!(body: "deserves to be number 1 hot billboard", track_id: polyphia_track5.id, uploader_id: kygo.id)
comment69 = Comment.create!(body: "why does this go so hardddddd", track_id: polyphia_track5.id, uploader_id: redVelvet.id)
comment70 = Comment.create!(body: "I'm addicted to this song, I don't know why", track_id: polyphia_track5.id, uploader_id: blackPink.id)

comment71 = Comment.create!(body: "gotta sample this! TOO good!!", track_id: polyphia_track6.id, uploader_id: lostFrequencies.id)
comment72 = Comment.create!(body: "I freakin luv this song", track_id: polyphia_track6.id, uploader_id: lofty.id)
comment73 = Comment.create!(body: "much talent wowowow", track_id: polyphia_track6.id, uploader_id: halsey.id)
comment74 = Comment.create!(body: "the best medicine", track_id: polyphia_track6.id, uploader_id: alleFarben.id)
comment75 = Comment.create!(body: "who would dislike this song?", track_id: polyphia_track6.id, uploader_id: duaLipa.id)

comment76 = Comment.create!(body: "wow this is a hit", track_id: polyphia_track7.id, uploader_id: tzelun.id)
comment77 = Comment.create!(body: "one of the best of all time", track_id: polyphia_track7.id, uploader_id: rammor.id)
comment78 = Comment.create!(body: "putting this on repeat", track_id: polyphia_track7.id, uploader_id: everglow.id)
comment79 = Comment.create!(body: "DOPE!!!!", track_id: polyphia_track7.id, uploader_id: theWeeknd.id)
comment80 = Comment.create!(body: "🧡🧡🧡🧡🧡", track_id: polyphia_track7.id, uploader_id: tohaj.id)

comment81 = Comment.create!(body: "DOPE!!!!", track_id: polyphia_track8.id, uploader_id: bts.id)
comment82 = Comment.create!(body: "🔥🔥🔥HOT🔥🔥🔥", track_id: polyphia_track8.id, uploader_id: taeyeon.id)
comment83 = Comment.create!(body: "I freakin luv this song", track_id: polyphia_track8.id, uploader_id: tohaj.id)
comment84 = Comment.create!(body: "thanks for releasing this", track_id: polyphia_track8.id, uploader_id: camilaCabello.id)
comment85 = Comment.create!(body: "this dropped my stress-level by a multiple of 10", track_id: polyphia_track8.id, uploader_id: kygo.id)

# kpop comments

comment86 = Comment.create!(body: "🔥🔥🔥HOT🔥🔥🔥", track_id: kpop_track1.id, uploader_id: alleFarben.id)
comment87 = Comment.create!(body: "DOPE!!!!", track_id: kpop_track1.id, uploader_id: timHenson.id)
comment88 = Comment.create!(body: "this is so hype", track_id: kpop_track1.id, uploader_id: halsey.id)
comment89 = Comment.create!(body: "cannot wait to see this live", track_id: kpop_track1.id, uploader_id: duaLipa.id)
comment90 = Comment.create!(body: "who would dislike this song?", track_id: kpop_track1.id, uploader_id: bido.id)

comment91 = Comment.create!(body: "the talent is insane", track_id: kpop_track2.id, uploader_id: kygo.id)
comment92 = Comment.create!(body: "🧡🧡🧡🧡🧡", track_id: kpop_track2.id, uploader_id: alleFarben.id)
comment93 = Comment.create!(body: "the best medicine", track_id: kpop_track2.id, uploader_id: camilaCabello.id)
comment94 = Comment.create!(body: "still listening 2021!!!", track_id: kpop_track2.id, uploader_id: stfspkn.id)
comment95 = Comment.create!(body: "gotta sample this! TOO good!!", track_id: kpop_track2.id, uploader_id: robinSchulz.id)

comment96 = Comment.create!(body: "hit me up for a collab", track_id: kpop_track3.id, uploader_id: theWeeknd.id)
comment97 = Comment.create!(body: "listening to this in the car", track_id: kpop_track3.id, uploader_id: timHenson.id)
comment98 = Comment.create!(body: "I freakin luv this song", track_id: kpop_track3.id, uploader_id: lostFrequencies.id)
comment99 = Comment.create!(body: "🔥🔥🔥HOT🔥🔥🔥", track_id: kpop_track3.id, uploader_id: lofty.id)
comment100 = Comment.create!(body: "one of the best of all time", track_id: kpop_track3.id, uploader_id: ryyzn.id)

comment101 = Comment.create!(body: "please do a USA tour soon!", track_id: kpop_track4.id, uploader_id: robinSchulz.id)
comment102 = Comment.create!(body: "nothings gonna kill my vibe with this on", track_id: kpop_track4.id, uploader_id: halsey.id)
comment103 = Comment.create!(body: "😍😍😍", track_id: kpop_track4.id, uploader_id: polyphia.id)
comment104 = Comment.create!(body: "one of the best of all time", track_id: kpop_track4.id, uploader_id: arianaGrande.id)
comment105 = Comment.create!(body: "DOPE!!!!", track_id: kpop_track4.id, uploader_id: bido.id)

comment106 = Comment.create!(body: "masterpiece", track_id: kpop_track5.id, uploader_id: tzelun.id)
comment107 = Comment.create!(body: "this is such a banger", track_id: kpop_track5.id, uploader_id: kygo.id)
comment108 = Comment.create!(body: "vibes all over!", track_id: kpop_track5.id, uploader_id: klingande.id)
comment109 = Comment.create!(body: "this song deserves an oscar!!", track_id: kpop_track5.id, uploader_id: rammor.id)
comment110 = Comment.create!(body: "🔥🔥🔥HOT🔥🔥🔥", track_id: kpop_track5.id, uploader_id: blackPink.id)

comment111 = Comment.create!(body: "🧡🧡🧡🧡🧡", track_id: kpop_track6.id, uploader_id: rammor.id)
comment112 = Comment.create!(body: "putting this on repeat", track_id: kpop_track6.id, uploader_id: kygo.id)
comment113 = Comment.create!(body: "wow", track_id: kpop_track6.id, uploader_id: timHenson.id)
comment114 = Comment.create!(body: "this is such a banger", track_id: kpop_track6.id, uploader_id: theWeeknd.id)
comment115 = Comment.create!(body: "hit me up for a collab", track_id: kpop_track6.id, uploader_id: halsey.id)

comment116 = Comment.create!(body: "this is gonna become a classic", track_id: kpop_track7.id, uploader_id: blackPink.id)
comment117 = Comment.create!(body: "too much talent omg", track_id: kpop_track7.id, uploader_id: ryyzn.id)
comment118 = Comment.create!(body: "was just playing Minecraft and now im here", track_id: kpop_track7.id, uploader_id: lostFrequencies.id)
comment119 = Comment.create!(body: "the best medicine", track_id: kpop_track7.id, uploader_id: stfspkn.id)
comment120 = Comment.create!(body: "nothings gonna kill my vibe with this on", track_id: kpop_track7.id, uploader_id: arianaGrande.id)

comment121 = Comment.create!(body: "listening to this in the car", track_id: kpop_track8.id, uploader_id: bido.id)
comment122 = Comment.create!(body: "this is hyppee!!!", track_id: kpop_track8.id, uploader_id: alleFarben.id)
comment123 = Comment.create!(body: "much talent wowowow", track_id: kpop_track8.id, uploader_id: kygo.id)
comment124 = Comment.create!(body: "still listening 2021!!!", track_id: kpop_track8.id, uploader_id: camilaCabello.id)
comment125 = Comment.create!(body: "did not disappoint", track_id: kpop_track8.id, uploader_id: theWeeknd.id)

comment126 = Comment.create!(body: "masterpiece", track_id: kpop_track9.id, uploader_id: lofty.id)
comment127 = Comment.create!(body: "best track in the album", track_id: kpop_track9.id, uploader_id: lostFrequencies.id)
comment128 = Comment.create!(body: "wow, the entire quarantine situation just got a whole lot better", track_id: kpop_track9.id, uploader_id: timHenson.id)
comment129 = Comment.create!(body: "I'm addicted to this song, I don't know why", track_id: kpop_track9.id, uploader_id: polyphia.id)
comment130 = Comment.create!(body: "why does this go so hardddddd", track_id: kpop_track9.id, uploader_id: robinSchulz.id)

# lofi comments

comment131 = Comment.create!(body: "VIBES!!!", track_id: lofi_track1.id, uploader_id: rammor.id)
comment132 = Comment.create!(body: "this helps me with sleep/study thanks!!!", track_id: lofi_track1.id, uploader_id: ryyzn.id)
comment133 = Comment.create!(body: "soooo chill", track_id: lofi_track1.id, uploader_id: kygo.id)
comment134 = Comment.create!(body: "nice work on the vibes", track_id: lofi_track1.id, uploader_id: robinSchulz.id)
comment135 = Comment.create!(body: "the perpetual vibe", track_id: lofi_track1.id, uploader_id: duaLipa.id)

comment136 = Comment.create!(body: "this hits my soul", track_id: lofi_track2.id, uploader_id: bts.id)
comment137 = Comment.create!(body: "my new homework music", track_id: lofi_track2.id, uploader_id: timHenson.id)
comment138 = Comment.create!(body: "I'm so chill right now", track_id: lofi_track2.id, uploader_id: kygo.id)
comment139 = Comment.create!(body: "DOPE!!!", track_id: lofi_track2.id, uploader_id: theWeeknd.id)
comment140 = Comment.create!(body: "glad I discovered this!", track_id: lofi_track2.id, uploader_id: blackPink.id)

comment141 = Comment.create!(body: "smooth and relaxing", track_id: lofi_track3.id, uploader_id: theWeeknd.id)
comment142 = Comment.create!(body: "not taking this off repeat", track_id: lofi_track3.id, uploader_id: lostFrequencies.id)
comment143 = Comment.create!(body: "this helps me with sleep/study thanks!!", track_id: lofi_track3.id, uploader_id: alleFarben.id)
comment144 = Comment.create!(body: "I'm so chill right now", track_id: lofi_track3.id, uploader_id: taeyeon.id)
comment145 = Comment.create!(body: "nice work on the vibes", track_id: lofi_track3.id, uploader_id: everglow.id)

comment146 = Comment.create!(body: "nothings gonna kill my vibe with this on", track_id: lofi_track4.id, uploader_id: itzy.id)
comment147 = Comment.create!(body: "hit me up for a collab", track_id: lofi_track4.id, uploader_id: duaLipa.id)
comment148 = Comment.create!(body: "gotta sample this! TOO good!!", track_id: lofi_track4.id, uploader_id: camilaCabello.id)
comment149 = Comment.create!(body: "this hits my soul", track_id: lofi_track4.id, uploader_id: halsey.id)
comment150 = Comment.create!(body: "my new homework music", track_id: lofi_track4.id, uploader_id: robinSchulz.id)

comment151 = Comment.create!(body: "vibes all over!", track_id: lofi_track5.id, uploader_id: itzy.id)
comment152 = Comment.create!(body: "this song deserves an oscar!!", track_id: lofi_track5.id, uploader_id: arianaGrande.id)
comment153 = Comment.create!(body: "the best medicine", track_id: lofi_track5.id, uploader_id: tzelun.id)
comment154 = Comment.create!(body: "what a peaceful sound", track_id: lofi_track5.id, uploader_id: klingande.id)
comment155 = Comment.create!(body: "DAMN... this is goooood", track_id: lofi_track5.id, uploader_id: timHenson.id)


comment156 = Comment.create!(body: "finally some good chill study music", track_id: lofi_track6.id, uploader_id: tohaj.id)
comment157 = Comment.create!(body: "really helping me to relax and study", track_id: lofi_track6.id, uploader_id: duaLipa.id)
comment158 = Comment.create!(body: "I've never felt more at ease ", track_id: lofi_track6.id, uploader_id: robinSchulz.id)
comment159 = Comment.create!(body: "nothings gonna kill my vibe with this on", track_id: lofi_track6.id, uploader_id: polyphia.id)
comment160 = Comment.create!(body: "SOOOO smooth wow", track_id: lofi_track6.id, uploader_id: camilaCabello.id)

comment161 = Comment.create!(body: "I listen to this everytime I study", track_id: lofi_track7.id, uploader_id: bts.id)
comment162 = Comment.create!(body: "this is the most beautiful thing I have ever listened to in my life", track_id: lofi_track7.id, uploader_id: ryyzn.id)
comment163 = Comment.create!(body: "this hits my soul", track_id: lofi_track7.id, uploader_id: rammor.id)
comment164 = Comment.create!(body: "I'm so chill right now", track_id: lofi_track7.id, uploader_id: blackPink.id)
comment165 = Comment.create!(body: "smooth and relaxing", track_id: lofi_track7.id, uploader_id: halsey.id)

# vibe comments

comment166 = Comment.create!(body: "wow, the entire quarantine situation just got a whole lot better", track_id: vibe_track1.id, uploader_id: redVelvet.id)
comment167 = Comment.create!(body: "this dropped my stress-level by a multiple of 10", track_id: vibe_track1.id, uploader_id: timHenson.id)
comment168 = Comment.create!(body: "feels like I’m floating in the clouds", track_id: vibe_track1.id, uploader_id: duaLipa.id)
comment169 = Comment.create!(body: "gotta sample this! TOO good!!", track_id: vibe_track1.id, uploader_id: stfspkn.id)
comment170 = Comment.create!(body: "😍😍😍", track_id: vibe_track1.id, uploader_id: bido.id)

comment171 = Comment.create!(body: "🔥🔥🔥HOT🔥🔥🔥", track_id: vibe_track2.id, uploader_id: taeyeon.id)
comment172 = Comment.create!(body: "I'm addicted to this song, I don't know why", track_id: vibe_track2.id, uploader_id: theWeeknd.id)
comment173 = Comment.create!(body: "deserves to be number 1 hot billboard", track_id: vibe_track2.id, uploader_id: timHenson.id)
comment174 = Comment.create!(body: "who would dislike this song?", track_id: vibe_track2.id, uploader_id: camilaCabello.id)
comment175 = Comment.create!(body: "this hits haaarrrddd", track_id: vibe_track2.id, uploader_id: arianaGrande.id)

comment176 = Comment.create!(body: "🔥🔥🔥HOT🔥🔥🔥", track_id: vibe_track3.id, uploader_id: stfspkn.id)
comment177 = Comment.create!(body: "masterpiece", track_id: vibe_track3.id, uploader_id: lostFrequencies.id)
comment178 = Comment.create!(body: "deserves to be number 1 hot billboard", track_id: vibe_track3.id, uploader_id: halsey.id)
comment179 = Comment.create!(body: "I'm addicted to this song, I don't know why", track_id: vibe_track3.id, uploader_id: bts.id)
comment180 = Comment.create!(body: "gotta sample this! TOO good!!", track_id: vibe_track3.id, uploader_id: everglow.id)

comment181 = Comment.create!(body: "DOPE!!!!", track_id: vibe_track4.id, uploader_id: bido.id)
comment182 = Comment.create!(body: "this is so hype", track_id: vibe_track4.id, uploader_id: tzelun.id)
comment183 = Comment.create!(body: "I freakin luv this song", track_id: vibe_track4.id, uploader_id: camilaCabello.id)
comment184 = Comment.create!(body: "one of the best of all time", track_id: vibe_track4.id, uploader_id: polyphia.id)
comment185 = Comment.create!(body: "much talent wowowow", track_id: vibe_track4.id, uploader_id: theWeeknd.id)

comment186 = Comment.create!(body: "🔥🔥🔥HOT🔥🔥🔥", track_id: vibe_track5.id, uploader_id: halsey.id)
comment187 = Comment.create!(body: "best track in the album", track_id: vibe_track5.id, uploader_id: bts.id)
comment188 = Comment.create!(body: "putting this on repeat", track_id: vibe_track5.id, uploader_id: blackPink.id)
comment189 = Comment.create!(body: "wow, the entire quarantine situation just got a whole lot better", track_id: vibe_track5.id, uploader_id: camilaCabello.id)
comment190 = Comment.create!(body: "please do a USA tour soon!", track_id: vibe_track5.id, uploader_id: timHenson.id)

comment191 = Comment.create!(body: "the best medicine", track_id: vibe_track6.id, uploader_id: lostFrequencies.id)
comment192 = Comment.create!(body: "did not disappoint", track_id: vibe_track6.id, uploader_id: theWeeknd.id)
comment193 = Comment.create!(body: "no matter how much I listen to this it never gets old", track_id: vibe_track6.id, uploader_id: timHenson.id)
comment194 = Comment.create!(body: "hit me up for a collab", track_id: vibe_track6.id, uploader_id: duaLipa.id)
comment195 = Comment.create!(body: "one of the best of all time", track_id: vibe_track6.id, uploader_id: taeyeon.id)

comment196 = Comment.create!(body: "wow this is a hit", track_id: vibe_track7.id, uploader_id: arianaGrande.id)
comment197 = Comment.create!(body: "we need to collab", track_id: vibe_track7.id, uploader_id: theWeeknd.id)
comment198 = Comment.create!(body: "too much talent omg", track_id: vibe_track7.id, uploader_id: itzy.id)
comment199 = Comment.create!(body: "wow 😍", track_id: vibe_track7.id, uploader_id: tohaj.id)
comment200 = Comment.create!(body: "🔥🔥🔥HOT🔥🔥🔥", track_id: vibe_track7.id, uploader_id: stfspkn.id)

# dance comments

comment201 = Comment.create!(body: "gotta sample this! TOO good!!", track_id: dance_track1.id, uploader_id: kygo.id)
comment202 = Comment.create!(body: "I freakin luv this song", track_id: dance_track1.id, uploader_id: taeyeon.id)
comment203 = Comment.create!(body: "nothings gonna kill my vibe with this on", track_id: dance_track1.id, uploader_id: bts.id)
comment204 = Comment.create!(body: "was just playing Minecraft and now im here", track_id: dance_track1.id, uploader_id: timHenson.id)
comment205 = Comment.create!(body: "listening to this in the car", track_id: dance_track1.id, uploader_id: camilaCabello.id)

comment206 = Comment.create!(body: "too much talent omg", track_id: dance_track2.id, uploader_id: rammor.id)
comment207 = Comment.create!(body: "feels like I’m floating in the clouds", track_id: dance_track2.id, uploader_id: redVelvet.id)
comment208 = Comment.create!(body: "gotta sample this! TOO good!!", track_id: dance_track2.id, uploader_id: polyphia.id)
comment209 = Comment.create!(body: "hit me up for a collab", track_id: dance_track2.id, uploader_id: halsey.id)
comment210 = Comment.create!(body: "this dropped my stress-level by a multiple of 10", track_id: dance_track2.id, uploader_id: lofty.id)

comment211 = Comment.create!(body: "no matter how much I listen to this it never gets old", track_id: dance_track3.id, uploader_id: robinSchulz.id)
comment212 = Comment.create!(body: "heaven to my soul", track_id: dance_track3.id, uploader_id: lostFrequencies.id)
comment213 = Comment.create!(body: "much talent wowowow", track_id: dance_track3.id, uploader_id: alleFarben.id)
comment214 = Comment.create!(body: "the best medicine", track_id: dance_track3.id, uploader_id: blackPink.id)
comment215 = Comment.create!(body: "best track in the album", track_id: dance_track3.id, uploader_id: arianaGrande.id)

comment216 = Comment.create!(body: "putting this on repeat", track_id: dance_track4.id, uploader_id: duaLipa.id)
comment217 = Comment.create!(body: "wow, the entire quarantine situation just got a whole lot better", track_id: dance_track4.id, uploader_id: timHenson.id)
comment218 = Comment.create!(body: "masterpiece", track_id: dance_track4.id, uploader_id: everglow.id)
comment219 = Comment.create!(body: "deserves to be number 1 hot billboard", track_id: dance_track4.id, uploader_id: taeyeon.id)
comment220 = Comment.create!(body: "still listening 2021!!!", track_id: dance_track4.id, uploader_id: robinSchulz.id)

comment221 = Comment.create!(body: "please do a USA tour soon!", track_id: dance_track5.id, uploader_id: duaLipa.id)
comment222 = Comment.create!(body: "🔥🔥🔥HOT🔥🔥🔥", track_id: dance_track5.id, uploader_id: arianaGrande.id)
comment223 = Comment.create!(body: "this is such a banger", track_id: dance_track5.id, uploader_id: camilaCabello.id)
comment224 = Comment.create!(body: "this is such a banger", track_id: dance_track5.id, uploader_id: tzelun.id)
comment225 = Comment.create!(body: "this song deserves an oscar!!", track_id: dance_track5.id, uploader_id: klingande.id)

comment226 = Comment.create!(body: "the best medicine", track_id: dance_track6.id, uploader_id: kygo.id)
comment227 = Comment.create!(body: "thanks for releasing this", track_id: dance_track6.id, uploader_id: duaLipa.id)
comment228 = Comment.create!(body: "did not disappoint", track_id: dance_track6.id, uploader_id: taeyeon.id)
comment229 = Comment.create!(body: "too much talent omg", track_id: dance_track6.id, uploader_id: theWeeknd.id)
comment230 = Comment.create!(body: "one of the best of all time", track_id: dance_track6.id, uploader_id: bido.id)

comment231 = Comment.create!(body: "can't wait to see you live", track_id: dance_track7.id, uploader_id: stfspkn.id)
comment232 = Comment.create!(body: "wow this is a hit", track_id: dance_track7.id, uploader_id: tohaj.id)
comment233 = Comment.create!(body: "we need to collab", track_id: dance_track7.id, uploader_id: lostFrequencies.id)
comment234 = Comment.create!(body: "I freakin luv this song", track_id: dance_track7.id, uploader_id: blackPink.id)
comment235 = Comment.create!(body: "mix is incredible", track_id: dance_track7.id, uploader_id: timHenson.id)






