class AddEmailToBio < ActiveRecord::Migration[5.1]
  def change
    add_column :bios, :email, :string
  end
end
