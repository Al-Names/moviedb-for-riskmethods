Rails.application.routes.draw do
  resources :movies
  root 'pages#index'
  match '*path', to: 'pages#index', via: :all
end
