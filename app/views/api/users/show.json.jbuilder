json.extract! @user, :id, :username
if @user.profile_img.attached?
  json.profileUrl url_for(@user.profile_img)
else
  json.profileUrl 'https://fsp-seed.s3-us-west-1.amazonaws.com/rick.jpg'
end
