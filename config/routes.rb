Rails.application.routes.draw do
  root "pages#index"
  get '/cv', to: 'pages#index'
  get '/research', to: 'pages#index'
  get '/teaching', to: 'pages#index'
  get '/writing', to: 'pages#index'

  namespace :api do
    resources :resumes, only: [:show]
    resources :research, only: [:index]
  end

  resources :resumes, only: :update
  resources :research, only: [:index, :create, :update]


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
