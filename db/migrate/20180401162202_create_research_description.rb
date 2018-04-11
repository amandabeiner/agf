class CreateResearchDescription < ActiveRecord::Migration[5.1]
  def change
    create_table :research_descriptions do |t|
      t.text :paragraph, null: false
    end
  end
end
