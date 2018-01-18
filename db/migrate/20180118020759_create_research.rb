class CreateResearch < ActiveRecord::Migration[5.1]
  def change
    create_table :researches do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.string :image_url, null: false
      t.boolean :headline, default: false
      t.boolean :hidden, default: false
    end
  end
end
