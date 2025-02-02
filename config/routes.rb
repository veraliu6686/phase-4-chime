Rails.application.routes.draw do

  resources :comments
  resources :posts
  resources :users, only: [:index, :create, :show]

  get "postcomments/:id", to: "posts#show_comments"
  # get "postuser/:id", to: "posts#show_users"
  post '/login', to: 'sessions#create'
  delete '/logout', to:'sessions#delete'
  get '/authorized_user', to: 'users#show'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
