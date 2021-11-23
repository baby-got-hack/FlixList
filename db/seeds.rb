# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

movies = [
    {
    title: 'Passengers',
    genre: 'drama',
    release_date: '2016',
    runtime: '116 min',
    tv_show: false,
    seasons: 0,
    img: 'https://i.imgur.com/SZkINrl.jpg'
    },

    {
    title: 'Dumb and Dumber',
    genre: 'comedy',
    release_date: '1994',
    runtime: '107 min',
    tv_show: false,
    seasons: 0,
    img: 'https://i.imgur.com/Gemyev9.png'
    },
    
    {
    title: 'No Time to Die',
    genre: 'action',
    release_date: '2021',
    runtime: '163 min',
    tv_show: false,
    seasons: 0,
    img: 'https://i.imgur.com/Ry2GcrV.png'
    },

    {
    title: 'Bad Candy',
    genre: 'horror',
    release_date: '2021',
    runtime: '103 min',
    tv_show: false,
    seasons: 0,
    img: 'https://i.imgur.com/0GmDvwp.png'
    },
    
    {
    title: 'Indiana Jones Temple of Doom',
    genre: 'action',
    release_date: '1984',
    runtime: '118 min',
    tv_show: false,
    seasons: 0,
    img: 'https://i.imgur.com/B4ZGw5c.png'
    },

    {
    title: '1917',
    genre: 'action',
    release_date: '2019',
    runtime: '119 min',
    tv_show: false,
    seasons: 0,
    img: 'https://i.imgur.com/TVlDN9O.png'
    },
    
    {
    title: "Fuerris Bueller's Day Off",
    genre: 'comedy',
    release_date: '1986',
    runtime: '103 min',
    tv_show: false,
    seasons: 0,
    img: 'https://i.imgur.com/79WneRT.png'
    },
    
    {
    title: 'Free Guy',
    genre: 'comedy',
    release_date: '2021',
    runtime: '115 min',
    tv_show: false,
    seasons: 0,
    img: 'https://i.imgur.com/fW2hinK.png'
    },
    
    {
    title: 'Saturday Night Fever',
    genre: 'drama',
    release_date: '1977',
    runtime: '118 min',
    tv_show: false,
    seasons: 0,
    img: 'https://i.imgur.com/e6ft157.png'
    },

    {
    title: 'House of Gucci',
    genre: 'drama',
    release_date: '2021',
    runtime: '157 min',
    tv_show: false,
    seasons: 0,
    img: 'https://i.imgur.com/5PnB7n3.png'
    },
    
    {
    title: 'Nightmare on Elm Street 3',
    genre: 'horror',
    release_date: '1987',
    runtime: '95 min',
    tv_show: false,
    seasons: 0,
    img: 'https://i.imgur.com/daPYK6m.png'
    },

    {
    title: 'Misery',
    genre: 'horror',
    release_date: '1990',
    runtime: '107 min',
    tv_show: false,
    seasons: 0,
    img: 'https://i.imgur.com/Ko6vI4p.png'
    },

    {
    title: 'Miami Vice',
    genre: 'action',
    release_date: '1984',
    runtime: '48 min',
    tv_show: true,
    seasons: 5,
    img: 'https://i.imgur.com/29lQ06o.png'
    },

    {
    title: '24',
    genre: 'action',
    release_date: '2001',
    runtime: '44 min',
    tv_show: true,
    seasons: 9,
    img: 'https://i.imgur.com/OBE4YXB.png'
    },

    {
    title: 'Loki',
    genre: 'action',
    release_date: '2021',
    runtime: '54 min',
    tv_show: true,
    seasons: 1,
    img: 'https://i.imgur.com/piI7ZqG.png'
    },

    {
    title: 'Threes Company',
    genre: 'comedy',
    release_date: '1976',
    runtime: '30 min',
    tv_show: true,
    seasons: 8,
    img: 'https://i.imgur.com/XLnY5Wr.png'
    },

    {
    title: 'Two and a Half Men',
    genre: 'comedy',
    release_date: '2003',
    runtime: '22 min',
    tv_show: true,
    seasons: 12,
    img: 'https://i.imgur.com/69j6T86.png'
    },

    {
    title: "Clarkson's Farm",
    genre: 'comedy',
    release_date: '2021',
    runtime: '45 min',
    tv_show: true,
    seasons: 1,
    img: 'https://i.imgur.com/j3NJ4hN.png'
    },

    {
    title: "Charlie's Angels",
    genre: 'drama',
    release_date: '1976',
    runtime: '60 min',
    tv_show: true,
    seasons: 5,
    img: 'https://i.imgur.com/70Sem1w.png'
    },

    {
    title: 'The X Files',
    genre: 'drama',
    release_date: '1993',
    runtime: '45 min',
    tv_show: true,
    seasons: 11,
    img: 'https://i.imgur.com/fwbIiYM.png'
    },

    {
    title: 'Squid Game',
    genre: 'drama',
    release_date: '2021',
    runtime: '55 min',
    tv_show: true,
    seasons: 1,
    img: 'https://i.imgur.com/vxo2zMy.png'
    },

    {
    title: 'Castle Rock',
    genre: 'horror',
    release_date: '2018',
    runtime: '60 min',
    tv_show: true,
    seasons: 2,
    img: 'https://i.imgur.com/hEs6AfT.png'
    },

    {
    title: 'Unsolved Mysteries',
    genre: 'horror',
    release_date: '1987',
    runtime: '60 min',
    tv_show: true,
    seasons: 16,
    img: 'https://i.imgur.com/FunXxZt.png'
    },

    {
    title: 'I Know What you did Last Summer',
    genre: 'horror',
    release_date: '2021',
    runtime: '60 min',
    tv_show: true,
    seasons: 1,
    img: 'https://i.imgur.com/YVPWci8.png'
    }

]

movies.each do |attribute|
    Movie.create attribute
end
