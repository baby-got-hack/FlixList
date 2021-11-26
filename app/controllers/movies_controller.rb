class MoviesController < ApplicationController

    def index
         movies = Movie.where(genre: params[:genre]).order(:title).limit(6)
         render json: movies
    end

end
