Rails.application.routes.draw do
  root "pages#index"
  get '/cv', to: 'pages#index'
  get '/research', to: 'pages#index'
  get '/teaching', to: 'pages#index'
  get '/writing', to: 'pages#index'
  
  namespace :api do
    resources :resumes, only: [:show]
    resources :research, only: [:index]
    resources :articles, only: :index
  end

  namespace :admin do
    root to: 'admin#index'
    resources :resume, only: [:edit, :update]
    resources :research
    resources :articles
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
