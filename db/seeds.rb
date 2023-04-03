# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Relationship.destroy_all
Campsite.destroy_all
State.destroy_all

User.create!([
    {   username: 'eperlman',
        first_name:'Emma',
        last_name:'Perlman',
        bio:'I love camping!',
        profile_pic:'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2022-07/220721-dog-nose-stock-al-1145-cccf00.jpg',
        password: "Maggie", 
        password_confirmation: "Maggie"
    },
    {   username: 'jmurphy',
        first_name:'Jill',
        last_name:'Murphy',
        bio:'I love to camp with my adventure cats!',
        profile_pic:'https://i.chzbgr.com/full/9526062592/hF6447CD7/sunglasses',
        password: "Mister", 
        password_confirmation: "Mister"
    }
])

(1..10).each do
    User.create!( 
        username: Faker::Internet.username(specifier: 5..10),
        first_name: Faker::Name.unique.first_name ,
        last_name: Faker::Name.unique.last_name,
        bio:'',
        profile_pic: Faker::Avatar.image,
        password: "password", 
        password_confirmation: "password" 
    )
end

users=User.all
User.first.followers << users[1..9]
User.first.followees<< [User.second]

State.create!(
name: 'Washington',
climate: 'Rainy',
known_for:'Beautiful Trees',
state_pic:'https://www.planetware.com/wpimages/2021/09/washington-state-best-national-forests-gifford-pinchot-national-forest-mt-adams.jpg'
)

State.create!(
name: 'Oregon',
climate: 'Moderate Cloudy/Rainy',
known_for:'Lush Forrest and Beautiful Beaches',
state_pic:'https://media.istockphoto.com/id/1139773685/photo/trillium-lake-and-mount-hood-oregon-usa-at-sunset.jpg?s=612x612&w=0&k=20&c=bbylDg9T9AStEqLLAPkOtbWwTv_DK_p6TfCkEOrP-DE='
)

Campsite.create!(
name: 'Waterfall',
user: User.first,
state: State.first,
latitude: 45.539490,
longitude: -122.217163,
access_type: 'Drive_In',
land_type: 'Public',
safety: 5,
quietness: 2,
privacy: 1,
scenery: 4,
accessibility: 5)

Campsite.create!(
name: 'Waterfall',
user: User.first,
state: State.first,
latitude: 45.539490,
longitude: -122.217163,
access_type: 'Drive',
land_type: 'Public',
safety: 0,
quietness: 2,
privacy: 1,
scenery: 4,
accessibility: 5)




p "Done Seeding!"

