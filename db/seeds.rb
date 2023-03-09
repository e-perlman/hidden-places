# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Relationship.destroy_all

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

(1..20).each do
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
User.first.followers << users[1..19]
User.first.followees<< [User.second]


p "Done Seeding!"

