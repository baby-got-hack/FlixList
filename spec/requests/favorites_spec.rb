require 'rails_helper'

RSpec.describe "Favorites", type: :request do
  
    let(:user_id){nil}
    let(:movie_id){nil}
    let(:params){
     { favorite: {
        user_id: user_id,
        movie_id: movie_id
      }}
      
    }
    let(:json){ JSON.parse(response.body) }
    
    let!(:user_one) {
      User.create  email: 'test@email.com', password: '123456', password_confirmation: '123456'
    }
    let!(:drama_one){ 
      Movie.create  title: 'Super drama movie', genre: 'drama', release_date: '2021', runtime: '91 min', tv_show: false, seasons: 0, img: 'https://bit.ly/3CN6Xei'
    }
    before do
      sign_in user_one
      post '/favorites', params: params 
    end
    it 'is successful' do
      expect(response).to have_http_status(:ok)
    end

    context 'saving a favorite' do
      let(:user_id){user_one.id}
      let(:movie_id){drama_one.id}

      it 'has a user id' do
        favorite = Favorite.all.first
        expect(favorite.user_id).to eq user_one.id 
        expect(json['user_id']).to eq user_one.id
      end

      it 'has movie id' do
        favorite = Favorite.all.first
        expect(favorite.movie_id).to eq drama_one.id 
        expect(json['movie_id']).to eq drama_one.id
      end
    end

    context 'deleting a favorite' do
      let(:user_id){user_one.id}
      let(:movie_id){drama_one.id}

      let!(:favorite_one) {
        Favorite.create id: 1, user_id: user_id, movie_id: movie_id
      }
      before do
        expect(favorite_one).to be 
        sign_in user_one
        delete "/favorites/#{favorite_one.id}"
      end
      it 'deletes the favorite by id' do

      end
    end
end
