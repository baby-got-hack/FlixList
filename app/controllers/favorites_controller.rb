class FavoritesController < ApplicationController
    before_action :authenticate_user!

    def index
      favorites = Favorite.where(user_id: current_user)
      render json: favorites
    end

    def movie_data
        favorites = Movie.joins(:favorites).where(favorites: {user_id: current_user}).uniq
        render json: favorites
    end

    def show
        favorite = Favorite.find(params[:id])
        render json: favorite
    end

    def create
        favorite_data = params['favorite']
        favorite = Favorite.create(movie_id: favorite_data[:movie_id], user_id: favorite_data[:user_id])
        render json: favorite
    end

    def destroy
        favorite = Favorite.find(params[:id])
        render json: favorite
    end
end
