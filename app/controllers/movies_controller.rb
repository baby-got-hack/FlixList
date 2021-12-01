class MoviesController < ApplicationController

    def index
         movies = Movie.where(genre: params[:genre], tv_show: params[:tv_show], release_date: params[:release_date]).order(:title).limit(6)
         render json: movies
    end

end
