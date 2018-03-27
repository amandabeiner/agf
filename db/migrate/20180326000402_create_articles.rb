class CreateArticles < ActiveRecord::Migration[5.1]
  def change
    create_table :articles do |t|
      t.string :headline, null: false
      t.string :image_url, null: false
      t.string :url
      t.string :source
      t.boolean :hidden, default: false

      t.timestamps
    end
  end
end
