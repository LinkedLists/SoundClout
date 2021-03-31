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
taeyeon = User.create!(username: "Everglow", password: "secretpasswordlol")
everglow = User.create!(username: "Taeyeon", password: "secretpasswordlol")
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




# user1.save!
# track1 = Track.create!(title: "hello", uploader_id: demo.id, description: "hhahaha", genre: "duh")

topHits_track1 = Track.new(title: "7 Rings", uploader_id: arianaGrande.id, description: "Breakfast at Tiffany's", genre: "Pop")
topHits_track2 = Track.new(title: "Positions", uploader_id: arianaGrande.id, description: "Heaven sent you to me", genre: "Pop")
topHits_track3 = Track.new(title: "Havana", uploader_id: camilaCabello.id, description: "Come to Havana with me!", genre: "Pop")
topHits_track4 = Track.new(title: "Senorita", uploader_id: camilaCabello.id, description: "Check out my collab with Shawn Mendes!!", genre: "Pop")
topHits_track5 = Track.new(title: "Without Me", uploader_id: halsey.id, description: "Found you when your heart was broken", genre: "Pop")
topHits_track6 = Track.new(title: "Be Kind", uploader_id: halsey.id, description: "Be kind to the one that you love!", genre: "Pop")
topHits_track7 = Track.new(title: "In Your Eyes", uploader_id: theWeeknd.id, description: "I just pretend that I'm in the dark", genre: "R&B")
topHits_track8 = Track.new(title: "Blinding Lights", uploader_id: theWeeknd.id, description: "Lights are very bright!", genre: "R&B")
topHits_track9 = Track.new(title: "Save Your Tears", uploader_id: theWeeknd.id, description: "I saw you dancing in a crowded room", genre: "R&B")

topHits_track1_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Ariana+Grande++7+rings.mp3")
topHits_track2_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Ariana+Grande++positions+Lyrics.mp3")
topHits_track3_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Camila+Cabello++Havana+Official+Audio+ft+Young+Thug.mp3")
topHits_track4_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Shawn+Mendes+Camila+Cabello++Se%C3%B1orita+Lyrics.mp3")
topHits_track5_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Halsey++Without+Me.mp3")
topHits_track6_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Marshmello+Halsey++Be+Kind+Halsey+Lyric+Video.mp3")
topHits_track7_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+In+Your+Eyes.mp3")
topHits_track8_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Blinding+Lights.mp3")
topHits_track8_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+The+Weeknd++Save+Your+Tears+Audio.mp3")

polyphia_track1 = Track.new(title: "Light", uploader_id: polyphia.id, description: "this is lit", genre: "Instrumental")
polyphia_track2 = Track.new(title: "G.O.A.T", uploader_id: polyphia.id, description: "Meet Timi Hendrix", genre: "Instrumental")
polyphia_track3 = Track.new(title: "Goose", uploader_id: polyphia.id, description: "It's Grey Goose, baby!", genre: "Instrumental")
polyphia_track4 = Track.new(title: "James Franco", uploader_id: polyphia.id, description: "Is he related to Dave Franco?", genre: "Instrumental")
polyphia_track5 = Track.new(title: "Saucy", uploader_id: polyphia.id, description: "This is nasty", genre: "Instrumental")
polyphia_track6 = Track.new(title: "The Worst", uploader_id: polyphia.id, description: "wr6st", genre: "Instrumental")
polyphia_track7 = Track.new(title: "Yas ft. Mario Camarena and Erick Hansel", uploader_id: polyphia.id, description: "Collab with Chon", genre: "Instrumental")
polyphia_track8 = Track.new(title: "Blood Moon", uploader_id: timHenson.id, description: "Betcha can't play this", genre: "Instrumental")

polyphia_track1_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Light++Polyphia+Official+Audio.mp3")
polyphia_track2_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Polyphia++GOAT+Official+Music+Video.mp3")
polyphia_track3_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Polyphia++Goose+Official+Music+Video.mp3")
polyphia_track4_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Polyphia++James+Franco.mp3")
polyphia_track5_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Polyphia++Saucy.mp3")
polyphia_track6_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Polyphia++The+Worst+Official+Audio.mp3")
polyphia_track7_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Polyphia++Yas+feat+Mario+Camarena+and+Erick+Hansel+Official+Music+Video.mp3")
polyphia_track8_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Blood+Moon.mp3")

kpop_track1 = Track.new(title: "DDUDU DDUDU", uploader_id: blackPink.id, description: "~DDDUUDDDUUDDDUU~", genre: "Kpop")
kpop_track2 = Track.new(title: "How You Like That", uploader_id: blackPink.id, description: "Blackpink in your area", genre: "Kpop")
kpop_track3 = Track.new(title: "Lovesick Girls", uploader_id: blackPink.id, description: "We are the lovesick girls", genre: "Kpop")
kpop_track4 = Track.new(title: "Boy With Luv ft. Halsey", uploader_id: bts.id, description: "New song with Halsey!", genre: "Kpop")
kpop_track5 = Track.new(title: "Dynamite", uploader_id: bts.id, description: "Beat for the summer", genre: "Kpop")
kpop_track6 = Track.new(title: "La Di Da", uploader_id: everglow.id, description: "We're about to break the charts with this", genre: "Kpop")
kpop_track7 = Track.new(title: "Wannabe", uploader_id: itzy.id, description: "I just wanna be me", genre: "Kpop")
kpop_track8 = Track.new(title: "Psycho", uploader_id: redVelvet.id, description: "Smooth", genre: "Kpop")
kpop_track9 = Track.new(title: "Spark", uploader_id: taeyeon.id, description: "Purpose", genre: "Kpop")

kpop_track1_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+BLACKPINK++%EB%9A%9C%EB%91%90%EB%9A%9C%EB%91%90+DDUDU+DDUDU+MV.mp3") 
kpop_track2_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+BLACKPINK++How+You+Like+That+MV.mp3") 
kpop_track3_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+BLACKPINK++Lovesick+Girls+MV.mp3") 
kpop_track4_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+BTS+%EB%B0%A9%ED%83%84%EC%86%8C%EB%85%84%EB%8B%A8+%EC%9E%91%EC%9D%80+%EA%B2%83%EB%93%A4%EC%9D%84+%EC%9C%84%ED%95%9C+%EC%8B%9C+Boy+With+Luv+feat+Halsey+Official+MV.mp3") 
kpop_track5_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+BTS+%EB%B0%A9%ED%83%84%EC%86%8C%EB%85%84%EB%8B%A8+Dynamite+Official+MV.mp3") 
kpop_track6_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+EVERGLOW+%EC%97%90%EB%B2%84%EA%B8%80%EB%A1%9C%EC%9A%B0++LA+DI+DA+MV.mp3") 
kpop_track7_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+ITZY+WANNABE+MV.mp3") 
kpop_track8_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Red+Velvet+%EB%A0%88%EB%93%9C%EB%B2%A8%EB%B2%B3+Psycho+MV.mp3") 
kpop_track9_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+TAEYEON+%ED%83%9C%EC%97%B0+%EB%B6%88%ED%8B%B0+Spark+MV.mp3") 

lofi_track1 = Track.new(title: "Trauerfall", uploader_id: tzelun.id, description: "<3",genre: "Lofi")
lofi_track2 = Track.new(title: "Searching", uploader_id: tzelun.id, description: "I'm still searching", genre: "Lofi")
lofi_track3 = Track.new(title: "Watch What I Do", uploader_id: tzelun.id, description: "Hope you're watching", genre: "Lofi")
lofi_track4 = Track.new(title: "Loves Dissonance", uploader_id: lofty.id, description: "Love", genre: "Lofi")
lofi_track5 = Track.new(title: "Motu One", uploader_id: tohaj.id, description: "Just dropping some vibes", genre: "Lofi")
lofi_track6 = Track.new(title: "What Could've Been", uploader_id: stfspkn.id, description: "And what should never be", genre: "Lofi")
lofi_track7 = Track.new(title: "Remind", uploader_id: bido.id, description: "Just remind me when you need be to drop another one", genre: "Lofi")

lofi_track1_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+E+I+S+U++Trauerfall+w+Tzelun.mp3")
lofi_track2_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Searching+by+Tzelun.mp3")
lofi_track3_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Watch+What+I+Do+by+Tzelun.mp3")
lofi_track4_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Loves+Dissonance+Original+Mix+by+Lofty.mp3")
lofi_track5_audio = open("https://s3.console.aws.amazon.com/s3/object/fsp-seed?region=us-west-1&prefix=yt1s.com+-+Motu+One+by+tohaj.mp3")
lofi_track6_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+sftspkn++what+couldve+been.mp3")
lofi_track7_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Remind+by+Bido.mp3")

dance_track1 = Track.new(title: "Break My Heart", uploader_id: duaLipa.id, description: "Don't break my heart", genre: "House")
dance_track2 = Track.new(title: "Hallucinate", uploader_id: duaLipa.id, description: "Are you hallucinating?", genre: "House")
dance_track3 = Track.new(title: "Levitating", uploader_id: duaLipa.id, description: "Float like a butterfly", genre: "House")
dance_track4 = Track.new(title: "Donna Summer - Hot Stuff (Remix)", uploader_id: kygo.id, description: "🔥🔥🔥HOT🔥🔥🔥", genre: "House")
dance_track5 = Track.new(title: "Whitney Houston - Higher Love (Remix)", uploader_id: kygo.id, description: "Remix of an oldie", genre: "House")
dance_track6 = Track.new(title: "Right Now ft. Nick Jonas", uploader_id: robinSchulz.id, description: "Your heart is all I need", genre: "House")
dance_track7 = Track.new(title: "Sugar ft. Francesco Yates", uploader_id: robinSchulz.id, description: "Sweet groove", genre: "House")

dance_track1_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Dua+Lipa++Break+My+Heart+Lyrics.mp3")
dance_track2_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Dua+Lipa++Hallucinate+Official+Lyrics+Video.mp3")
dance_track3_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Dua+Lipa++Levitating+Official+Lyrics+Video.mp3")
dance_track4_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Kygo+Donna+Summer++Hot+Stuff+Lyrics.mp3")
dance_track5_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Kygo+Whitney+Houston++Higher+Love+Audio.mp3")
dance_track6_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Nick+Jonas+Robin+Schulz++Right+Now.mp3")
dance_track7_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Robin+Schulz++Sugar+feat+Francesco+Yates+OFFICIAL+MUSIC+VIDEO.mp3")

vibe_track1 = Track.new(title: "Fading ft. ILIRA", uploader_id: alleFarben.id, description: "Fading into you", genre: "House")
vibe_track2 = Track.new(title: "Happy Now", uploader_id: kygo.id, description: "I hope you'll be happy now", genre: "House")
vibe_track3 = Track.new(title: "Jubel", uploader_id: klingande.id, description: "Vibe for the summer!!!", genre: "House")
vibe_track4 = Track.new(title: "Are You With Me", uploader_id: lostFrequencies.id, description: "I wanna dance by water 'neath the Mexican sky", genre: "House")
vibe_track5 = Track.new(title: "Night Light", uploader_id: ryyzn.id, description: "Just stay the night", genre: "House")
vibe_track6 = Track.new(title: "Searching For You", uploader_id: rammor.id, description: "We can fly away to a higher place", genre: "House")
vibe_track7 = Track.new(title: "Sun Goes Down ft. Jasmine Thompson", uploader_id: robinSchulz.id, description: "Nothings ever what we expect", genre: "House")

vibe_track1_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Alle+Farben-+Fading.mp3")
vibe_track2_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Happy+Now+by+kygo.mp3")
vibe_track3_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Jubel+by+Klingande.mp3")
vibe_track4_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Lost+Frequencies++-+Are+You+With+Me.mp3")
vibe_track5_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+RYYZN+-++Night+Light.mp3")
vibe_track6_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Rammor-+Searching+For+You.mp3")
vibe_track7_audio = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Robin+Schulz++-+Sun+Goes+Down+feat+Jasmine+Thompson.mp3")

# track1 = Track.new(title: "Saucy", uploader_id: demo.id, description: "hhahaha", genre: "Rock")
# track2 = Track.new(title: "G.O.A.T", uploader_id: demo.id, description: "timi hendrix", genre: "Rock")
# track4 = Track.new(title: "Senorita", uploader_id: demo.id, description: "check out my collab with shawn mendes!!", genre: "Pop")
# track5 = Track.new(title: "Castles Made of Sand", uploader_id: demo.id, description: "check out this rare studio version!!", genre: "Rock")
# track6 = Track.new(title: "The Wind Cries Mary", uploader_id: demo.id, description: "another rare find", genre: "Rock")
# track7 = Track.new(title: "Positions", uploader_id: demo.id, description: "here is another bop", genre: "Pop")

# attach image using open uri
# https://fsp-seed.s3-us-west-1.amazonaws.com/test.jpg
# https://fsp-seed.s3-us-west-1.amazonaws.com/cc.jpg
# https://fsp-seed.s3-us-west-1.amazonaws.com/jimi.jpg

# image1 = open('https://fsp-seed.s3-us-west-1.amazonaws.com/nlnd.jpg')
# image11 = open('https://fsp-seed.s3-us-west-1.amazonaws.com/nlnd.jpg')
# image2 = open('https://fsp-seed.s3-us-west-1.amazonaws.com/cc.jpg')
# image3 = open('https://fsp-seed.s3-us-west-1.amazonaws.com/senorita.jpg')
# image4 = open('https://fsp-seed.s3-us-west-1.amazonaws.com/jimi.jpg')
# image44 = open('https://fsp-seed.s3-us-west-1.amazonaws.com/jimi.jpg')
# image5 = open('https://fsp-seed.s3-us-west-1.amazonaws.com/positions.png')

# audio1 = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Polyphia++Saucy.mp3")
# audio2 = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Polyphia++GOAT+Official+Music+Video.mp3")
# audio3 = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Camila+Cabello++Havana+Official+Audio+ft+Young+Thug.mp3")
# audio4 = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Shawn+Mendes+Camila+Cabello++Se%C3%B1orita+Lyrics.mp3")
# audio5 = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Castles+Made+of+Sand+1967.mp3")
# audio6 = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Jimi+Hendrix+The+Wind+Cries+Mary.mp3")
# audio7 = open("https://fsp-seed.s3-us-west-1.amazonaws.com/yt1s.com+-+Ariana+Grande++positions+Lyrics.mp3")



# track1.photo_file.attach(io: image1, filename: 'nlnd')
# track2.photo_file.attach(io: image11, filename: 'nlnd')
# track3.photo_file.attach(io: image2, filename: 'camila')
# track4.photo_file.attach(io: image3, filename: 'cc and sm')
# track5.photo_file.attach(io: image44, filename: 'axis')
# track6.photo_file.attach(io: image4, filename: 'axis')
# track7.photo_file.attach(io: image5, filename: 'ariana')

# track1.audio_file.attach(io: audio1, filename: 'saucy_audio')
# track2.audio_file.attach(io: audio2, filename: 'goat_audio')
# track3.audio_file.attach(io: audio3, filename: 'havana_audio')
# track4.audio_file.attach(io: audio4, filename: 'senorita')
# track5.audio_file.attach(io: audio5, filename: 'castles_made_of_sand_audio')
# track6.audio_file.attach(io: audio6, filename: 'the_wind_cries_mary_audio')
# track7.audio_file.attach(io: audio7, filename: 'positions_audio')


# track1.save!
# track2.save!
# track3.save!
# track4.save!
# track5.save!
# track6.save!
# track7.save!
