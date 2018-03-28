class Article < ApplicationRecord
  validates :headline, presence: true
  validates :image_url, presence: true
end
