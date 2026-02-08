import os
import zipfile

def zip_dist_folder():
    dist_folder = 'dist'
    output_filename = 'deploy.zip'

    # Check if dist folder exists
    if not os.path.exists(dist_folder):
        print(f"Error: Folder '{dist_folder}' not found. Please run 'npm run build' first.")
        return

    # Create ZipFile
    with zipfile.ZipFile(output_filename, 'w', zipfile.ZIP_DEFLATED) as zipf:
        # Walk through the dist folder
        for root, dirs, files in os.walk(dist_folder):
            for file in files:
                # Create the full path to the file
                file_path = os.path.join(root, file)
                
                # Calculate the relative path for the archive (remove 'dist\' from the start)
                # This ensures index.html is at the root of the zip, not inside a 'dist' folder
                archive_name = os.path.relpath(file_path, dist_folder)
                
                zipf.write(file_path, archive_name)
                print(f"Added: {archive_name}")

    print(f"\nSuccess! '{output_filename}' created at the project root.")
    print("Upload this file to your cPanel public_html folder and extract it there.")

if __name__ == "__main__":
    zip_dist_folder()
