class CreateBios < ActiveRecord::Migration[5.1]
  def change
    create_table :bios do |t|
      t.text :paragraph, null: false
    end
  end
end
