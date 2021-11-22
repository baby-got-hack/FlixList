require 'rails_helper'

RSpec.describe "Movies", type: :request do
  let(:movie){ nil }
  let(:genre){ nil }
  let(:movie_params) do
    { 
      movie: movie,
      genre: genre
    }
  end

  let(:json){ JSON.parse(response.body)}

  describe "GET /index" do
    before do
      get '/movies', params: movie_params
    end

    it 'comes back as status 200' do
      expect(response).to have_http_status(:ok)
    end

    context 'when genre is set' do
      let(:genre){'drama'}
      let!(:drama_one){ 
        Movie.create  title: 'Super drama movie', genre: 'drama'
      }
      let!(:drama_two){ 
        Movie.create  title: 'Other super drama movie', genre: 'drama'
      }
      let!(:comedy_one){ 
        Movie.create  title: 'Super funny movie', genre: 'comedy' 
      }

      it 'returns movies filtered by drama' do
        binding.pry
        expect(json[0].id).to eq drama_two.id
        expect(json[1].id).to eq drama_one.id
        expect(json.length).to eq 2
      end
    end

  end
end
