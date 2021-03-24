class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :track_id, null: false
      t.integer :uploader_id, null: false
      t.string :body, null: false
      t.timestamps
    end
  end
end
