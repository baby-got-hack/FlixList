Rails.application.routes.draw do
  resources :movies
  resources :favorites do
    collection do
    get 'movie_data'
    end
  end
  devise_for :users
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root 'home#index'
  get '/movies', to: 'movies#index'
  post '/favorites', to: 'favorites#create'
end
