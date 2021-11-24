require 'rails_helper'

RSpec.describe "Favorites", type: :request do
  
    let(:user_id){nil}
    let(:movie_id){nil}
    let(:params){{
      user_id: user_id,
      movie_id: movie_id
    }}
    let(:json){ JSON.parse(response.body) }

    before do
      post '/favorites', params: params 
    end
    it 'is successful' do
      expect(response).to have_http_status(:ok)
    end

    context 'saving a favorite' do
      let!(:user_one) {
        User.create  email: 'test@email.com', password: '123456', password_confirmation: '123456'
      }
      let!(:drama_one){ 
        Movie.create  title: 'Super drama movie', genre: 'drama', release_date: '2021', runtime: '91 min', tv_show: false, seasons: 0, img: 'https://bit.ly/3CN6Xei'
      }
      let(:user_id){user_one.id}
      let(:movie_id){drama_one.id}

      it 'has a user id' do
        favorite = Favorite.all.first
        expect(favorite.user_id).to eq user_one.id 
        expect(json[user_id]).to eq user_one.id
      end

      it 'has movie id' do
        favorite = Favorite.all.first
        expect(favorite.movie_id).to eq drama_one.id 
        expect(json[movie_id]).to eq drama_one.id
      end
    end
end
