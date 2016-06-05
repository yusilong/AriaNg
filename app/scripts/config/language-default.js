(function () {
    'use strict';

    angular.module('ariaNg').config(['$translateProvider', function ($translateProvider) {
        $translateProvider.translations('en', {
            'English': 'English',
            'Operation Succeeded': 'Operation Succeeded',
            'Error': 'Error',
            'OK': 'OK',
            'Cancel': 'Cancel',
            'New': 'New',
            'Start': 'Start',
            'Pause': 'Pause',
            'Delete': 'Delete',
            'Select All': 'Select All',
            'Display Order': 'Display Order',
            'Search': 'Search',
            'Default': 'Default',
            'Remove Task': 'Remove Task',
            'Clear Stopped Tasks': 'Clear Stopped Tasks',
            'By File Name': 'By File Name',
            'By File Size': 'By File Size',
            'By Completed Percent': 'By Completed Percent',
            'By Remain Time': 'By Remain Time',
            'By Download Speed': 'By Download Speed',
            'Download': 'Download',
            'Upload': 'Upload',
            'Downloading': 'Downloading',
            'Seeding': 'Seeding',
            'Waiting': 'Waiting',
            'Paused': 'Paused',
            'Completed': 'Completed',
            'Error Occurred': 'Error Occurred',
            'Removed': 'Removed',
            'Downloaded / Stopped': 'Downloaded / Stopped',
            'Settings': 'Settings',
            'AriaNg Settings': 'AriaNg Settings',
            'Aria2 Settings': 'Aria2 Settings',
            'Basic Settings': 'Basic Settings',
            'HTTP/FTP/SFTP Settings': 'HTTP/FTP/SFTP Settings',
            'HTTP Settings': 'HTTP Settings',
            'FTP/SFTP Settings': 'FTP/SFTP Settings',
            'BitTorrent Settings': 'BitTorrent Settings',
            'MegaLink Settings': 'MegaLink Settings',
            'RPC Settings': 'RPC Settings',
            'Advanced Settings': 'Advanced Settings',
            'Aria2 Status': 'Aria2 Status',
            'File Name': 'File Name',
            'File Size': 'File Size',
            'Completed Percent': 'Percent',
            'Remain Time': 'Remain',
            'Download Speed': 'Download Speed',
            'Upload Speed': 'Upload Speed',
            'Overview': 'Overview',
            'Blocks': 'Blocks',
            'Files': 'Files',
            'Peers': 'Peers',
            'Task Status': 'Task Status',
            'Error Description': 'Error Description',
            'Health Percent': 'Health Percent',
            'Info Hash': 'Info Hash',
            'Seeders': 'Seeders',
            'Connections': 'Connections',
            'Download Dir': 'Download Dir',
            'Address': 'Address',
            'Status': 'Status',
            'Percent': 'Percent',
            'Download / Upload Speed': 'Download / Upload Speed',
            'No connected peers': 'No connected peers',
            'Confirm Remove': 'Confirm Remove',
            'Are you sure you want to remove the selected task?': 'Are you sure you want to remove the selected task?',
            'Confirm Clear': 'Confirm Clear',
            'Are you sure you want to clear stopped tasks?': 'Are you sure you want to clear stopped tasks?',
            'Language': 'Language',
            'Aria2 RPC Host': 'Aria2 RPC Host',
            'Aria2 RPC Port': 'Aria2 RPC Port',
            'Aria2 RPC Protocol': 'Aria2 RPC Protocol',
            'Aria2 RPC Secret Token': 'Aria2 RPC Secret Token',
            'Global Stat Refresh Interval': 'Global Stat Refresh Interval',
            'Download Task Refresh Interval': 'Download Task Refresh Interval',
            'Aria2 Version': 'Aria2 Version',
            'Enabled Features': 'Enabled Features',
            'Functions': 'Functions',
            'Save Session': 'Save Session',
            'Shutdown Aria2': 'Shutdown Aria2',
            'Confirm Shutdown': 'Confirm Shutdown',
            'Are you sure you want to shutdown aria2?': 'Are you sure you want to shutdown aria2?',
            'Session has been saved successfully.': 'Session has been saved successfully.',
            'Failed to save session.': 'Failed to save session.',
            'Aria2 has been shutdown successfully.': 'Aria2 has been shutdown successfully.',
            'Failed to shutdown aria2.': 'Failed to shutdown aria2.',
            'Toggle Navigation': 'Toggle Navigation',
            'Loading': 'Loading...',
            'More Than One Day': 'More than 1 day',
            'Unknown': 'Unknown',
            'Bytes': 'Bytes',
            'Hours': 'Hours',
            'Minutes': 'Minutes',
            'Seconds': 'Seconds',
            'Milliseconds': 'Milliseconds',
            'Http': 'Http',
            'Https': 'Https',
            'WebSocket': 'WebSocket',
            'WebSocket (Security)': 'WebSocket (Security)',
            'Disabled': 'Disabled',
            'Changes to the settings take effect after refreshing page.': 'Changes to the settings take effect after refreshing page.',
            'Type is illegal!': 'Type is illegal!',
            'format': {
                'time.millisecond': '{{value}} Millisecond',
                'time.milliseconds': '{{value}} Milliseconds',
                'time.second': '{{value}} Second',
                'time.seconds': '{{value}} Seconds',
                'time.minute': '{{value}} Minute',
                'time.minutes': '{{value}} Minutes',
                'time.hour': '{{value}} Hour',
                'time.hours': '{{value}} Hours',
                'task.error-occurred': 'Error Occurred ({{errorcode}})',
                'settings.file-count': '({{count}} Files)',
                'settings.total-count': '(Total Count: {{count}})'
            },
            'rpc': {
                'error': {
                    'Unauthorized': 'Authorization Failed!'
                }
            },
            'options': {
                'true': 'True',
                'false': 'False',
                'default': 'Default',
                'none': 'None',
                'hide': 'Hide',
                'full': 'Full',
                'http': 'Http',
                'https': 'Https',
                'ftp': 'Ftp',
                'mem': 'Memory Only',
                'get': 'GET',
                'tunnel': 'TUNNEL',
                'plain': 'Plain',
                'arc4': 'ARC4',
                'binary': 'Binary',
                'ascii': 'ASCII',
                'debug': 'Debug',
                'info': 'Info',
                'notice': 'Notice',
                'warn': 'Warn',
                'error': 'Error',
                'adaptive': 'adaptive',
                'epoll': 'epoll',
                'falloc': 'falloc',
                'feedback': 'feedback',
                'geom': 'geom',
                'inorder': 'inorder',
                'kqueue': 'kqueue',
                'poll': 'poll',
                'port': 'port',
                'prealloc': 'prealloc',
                'random': 'random',
                'select': 'select',
                'trunc': 'trunc',
                'SSLv3': 'SSLv3',
                'TLSv1': 'TLSv1',
                'TLSv1.1': 'TLSv1.1',
                'TLSv1.2': 'TLSv1.2',
                'dir.name': 'Download Path',
                'dir.description': '',
                'log.name': 'Log File',
                'log.description': 'The file name of the log file. If - is specified, log is written to stdout. If empty string("") is specified, or this option is omitted, no log is written to disk at all.',
                'max-concurrent-downloads.name': 'Max Concurrent Downloads',
                'max-concurrent-downloads.description': '',
                'check-integrity.name': 'Check Integrity',
                'check-integrity.description': 'Check file integrity by validating piece hashes or a hash of entire file. This option has effect only in BitTorrent, Metalink downloads with checksums or HTTP(S)/FTP downloads with --checksum option.',
                'continue.name': 'Resume Download',
                'continue.description': 'Continue downloading a partially downloaded file. Use this option to resume a download started by a web browser or another program which downloads files sequentially from the beginning. Currently this option is only applicable to HTTP(S)/FTP downloads.',
                'all-proxy.name': 'Proxy Server',
                'all-proxy.description': 'Use a proxy server for all protocols. To override a previously defined proxy, use "". You also can override this setting and specify a proxy server for a particular protocol using --http-proxy, --https-proxy and --ftp-proxy  This affects all downloads. The format of PROXY is [http://][USER:PASSWORD@]HOST[:PORT].',
                'all-proxy-user.name': 'Proxy User Name',
                'all-proxy-user.description': '',
                'all-proxy-passwd.name': 'Proxy Password',
                'all-proxy-passwd.description': '',
                'connect-timeout.name': 'Connect Timeout',
                'connect-timeout.description': 'Set the connect timeout in seconds to establish connection to HTTP/FTP/proxy server. After the connection is established, this option makes no effect and --timeout option is used instead.',
                'dry-run.name': 'Dry Run',
                'dry-run.description': 'If true is given, aria2 just checks whether the remote file is available and doesn\'t download data. This option has effect on HTTP/FTP download. BitTorrent downloads are canceled if true is specified.',
                'lowest-speed-limit.name': 'Lowest Speed Limit',
                'lowest-speed-limit.description': 'Close connection if download speed is lower than or equal to this value(bytes per sec). 0 means aria2 does not have a lowest speed limit. You can append K or M (1K = 1024, 1M = 1024K). This option does not affect BitTorrent downloads.',
                'max-connection-per-server.name': 'Max Connection Per Server',
                'max-connection-per-server.description': '',
                'max-file-not-found.name': 'Max File Not Found Try Times',
                'max-file-not-found.description': 'If aria2 receives "file not found" status from the remote HTTP/FTP servers NUM times without getting a single byte, then force the download to fail. Specify 0 to disable this option. This options is effective only when using HTTP/FTP servers. The number of retry attempt is counted toward --max-tries, so it should be configured too.',
                'max-tries.name': 'Max Try Times',
                'max-tries.description': 'Set number of tries. 0 means unlimited.',
                'min-split-size.name': 'Min Split Size',
                'min-split-size.description': 'aria2 does not split less than 2*SIZE byte range. For example, let\'s consider downloading 20MiB file. If SIZE is 10M, aria2 can split file into 2 range [0-10MiB) and [10MiB-20MiB) and download it using 2 sources(if --split >= 2, of course). If SIZE is 15M, since 2*15M > 20MiB, aria2 does not split file and download it using 1 source. You can append K or M (1K = 1024, 1M = 1024K). Possible Values: 1M-1024M.',
                'netrc-path.name': '.netrc Path',
                'netrc-path.description': '',
                'no-netrc.name': 'Disable netrc',
                'no-netrc.description': '',
                'no-proxy.name': 'No Proxy List',
                'no-proxy.description': 'Specify a comma separated list of host names, domains and network addresses with or without a subnet mask where no proxy should be used.',
                'proxy-method.name': 'Proxy Method',
                'proxy-method.description': 'Set the method to use in proxy request. METHOD is either GET or TUNNEL. HTTPS downloads always use TUNNEL regardless of this option.',
                'remote-time.name': 'Remote File Timestamp',
                'remote-time.description': 'Retrieve timestamp of the remote file from the remote HTTP/FTP server and if it is available, apply it to the local file.',
                'reuse-uri.name': 'Reuse Uri',
                'reuse-uri.description': 'Reuse already used URIs if no unused URIs are left.',
                'retry-wait.name': 'Retry Wait',
                'retry-wait.description': 'Set the seconds to wait between retries. When SEC > 0, aria2 will retry downloads when the HTTP server returns a 503 response.',
                'server-stat-of.name': 'Server Stat Output',
                'server-stat-of.description': 'Specify the file name to which performance profile of the servers is saved. You can load saved data using --server-stat-if option.',
                'server-stat-timeout.name': 'Server Stat Timeout',
                'server-stat-timeout.description': 'Specifies timeout in seconds to invalidate performance profile of the servers since the last contact to them.',
                'split.name': 'Split Count',
                'split.description': 'Download a file using N connections. If more than N URIs are given, first N URIs are used and remaining URIs are used for backup. If less than N URIs are given, those URIs are used more than once so that N connections total are made simultaneously. The number of connections to the same host is restricted by the --max-connection-per-server option.',
                'stream-piece-selector.name': 'Piece Selection Algorithm',
                'stream-piece-selector.description': 'Specify piece selection algorithm used in HTTP/FTP download. Piece means fixed length segment which is downloaded in parallel in segmented download. If default is given, aria2 selects piece so that it reduces the number of establishing connection. This is reasonable default behavior because establishing connection is an expensive operation. If inorder is given, aria2 selects piece which has minimum index. Index=0 means first of the file. This will be useful to view movie while downloading it. --enable-http-pipelining option may be useful to reduce re-connection overhead. Please note that aria2 honors --min-split-size option, so it will be necessary to specify a reasonable value to --min-split-size option. If random is given, aria2 selects piece randomly. Like inorder, --min-split-size option is honored. If geom is given, at the beginning aria2 selects piece which has minimum index like inorder, but it exponentially increasingly keeps space from previously selected piece. This will reduce the number of establishing connection and at the same time it will download the beginning part of the file first. This will be useful to view movie while downloading it.',
                'timeout.name': 'Timeout',
                'timeout.description': '',
                'uri-selector.name': 'URI Selection Algorithm',
                'uri-selector.description': 'Specify URI selection algorithm. The possible values are inorder, feedback and adaptive. If inorder is given, URI is tried in the order appeared in the URI list. If feedback is given, aria2 uses download speed observed in the previous downloads and choose fastest server in the URI list. This also effectively skips dead mirrors. The observed download speed is a part of performance profile of servers mentioned in --server-stat-of and --server-stat-if  If adaptive is given, selects one of the best mirrors for the first and reserved connections. For supplementary ones, it returns mirrors which has not been tested yet, and if each of them has already been tested, returns mirrors which has to be tested again. Otherwise, it doesn\'t select anymore mirrors. Like feedback, it uses a performance profile of servers.',
                'check-certificate.name': 'Check Certificate',
                'check-certificate.description': '',
                'http-accept-gzip.name': 'Accept GZip',
                'http-accept-gzip.description': 'Send Accept: deflate, gzip request header and inflate response if remote server responds with Content-Encoding: gzip or Content-Encoding: deflate.',
                'http-auth-challenge.name': 'Auth Challenge',
                'http-auth-challenge.description': 'Send HTTP authorization header only when it is requested by the server. If false is set, then authorization header is always sent to the server. There is an exception: if user name and password are embedded in URI, authorization header is always sent to the server regardless of this option.',
                'http-no-cache.name': 'No Cache',
                'http-no-cache.description': 'Send Cache-Control: no-cache and Pragma: no-cache header to avoid cached content. If false is given, these headers are not sent and you can add Cache-Control header with a directive you like using --header option.',
                'http-user.name': 'HTTP Default User Name',
                'http-user.description': '',
                'http-passwd.name': 'HTTP Default Password',
                'http-passwd.description': '',
                'http-proxy.name': 'HTTP Proxy Server',
                'http-proxy.description': '',
                'http-proxy-user.name': 'HTTP Proxy User Name',
                'http-proxy-user.description': '',
                'http-proxy-passwd.name': 'HTTP Proxy Password',
                'http-proxy-passwd.description': '',
                'https-proxy.name': 'HTTPS Proxy Server',
                'https-proxy.description': '',
                'https-proxy-user.name': 'HTTPS Proxy User Name',
                'https-proxy-user.description': '',
                'https-proxy-passwd.name': 'HTTPS Proxy Password',
                'https-proxy-passwd.description': '',
                'referer.name': 'Referer',
                'referer.description': 'Set an http referrer (Referer). This affects all http/https downloads. If * is given, the download URI is also used as the referrer. This may be useful when used together with the --parameterized-uri option.',
                'enable-http-keep-alive.name': 'Enable Persistent Connection',
                'enable-http-keep-alive.description': 'Enable HTTP/1.1 persistent connection.',
                'enable-http-pipelining.name': 'Enable HTTP Pipelining',
                'enable-http-pipelining.description': 'Enable HTTP/1.1 pipelining.',
                'header.name': 'Custom Header',
                'header.description': 'Append HEADER to HTTP request header.',
                'save-cookies.name': 'Cookies Path',
                'save-cookies.description': 'Save Cookies to FILE in Mozilla/Firefox(1.x/2.x)/ Netscape format. If FILE already exists, it is overwritten. Session Cookies are also saved and their expiry values are treated as 0.',
                'use-head.name': 'Use HEAD Method',
                'use-head.description': 'Use HEAD method for the first request to the HTTP server.',
                'user-agent.name': 'Custom User Agent',
                'user-agent.description': '',
                'ftp-user.name': 'FTP Default User Name',
                'ftp-user.description': '',
                'ftp-passwd.name': 'FTP Default Password',
                'ftp-passwd.description': 'If user name is embedded but password is missing in URI, aria2 tries to resolve password using .netrc. If password is found in .netrc, then use it as password. If not, use the password specified in this option.',
                'ftp-pasv.name': 'Passive Mode',
                'ftp-pasv.description': 'Use the passive mode in FTP. If false is given, the active mode will be used. This option is ignored for SFTP transfer.',
                'ftp-proxy.name': 'FTP Proxy Server',
                'ftp-proxy.description': '',
                'ftp-proxy-user.name': 'FTP Proxy User Name',
                'ftp-proxy-user.description': '',
                'ftp-proxy-passwd.name': 'FTP Proxy Password',
                'ftp-proxy-passwd.description': '',
                'ftp-type.name': 'Transfer Type',
                'ftp-type.description': '',
                'ftp-reuse-connection.name': 'Reuse Connection',
                'ftp-reuse-connection.description': '',
                'ssh-host-key-md.name': 'SSH Public Key Checksum',
                'ssh-host-key-md.description': 'Set checksum for SSH host public key. TYPE is hash type. The supported hash type is sha-1 or md5. DIGEST is hex digest. For example: sha-1=b030503d4de4539dc7885e6f0f5e256704edf4c3. This option can be used to validate server\'s public key when SFTP is used. If this option is not set, which is default, no validation takes place.',
                'bt-detach-seed-only.name': 'Detach Seed Only',
                'bt-detach-seed-only.description': 'Exclude seed only downloads when counting concurrent active downloads (See -j option). This means that if -j3 is given and this option is turned on and 3 downloads are active and one of those enters seed mode, then it is excluded from active download count (thus it becomes 2), and the next download waiting in queue gets started. But be aware that seeding item is still recognized as active download in RPC method.',
                'bt-enable-hook-after-hash-check.name': 'Enable Hook After Hash Check',
                'bt-enable-hook-after-hash-check.description': 'Allow hook command invocation after hash check (see -V option) in BitTorrent download. By default, when hash check succeeds, the command given by --on-bt-download-complete is executed. To disable this action, give false to this option.',
                'bt-enable-lpd.name': 'Enable Local Peer Discovery (LPD)',
                'bt-enable-lpd.description': 'Enable Local Peer Discovery. If a private flag is set in a torrent, aria2 doesn\'t use this feature for that download even if true is given.',
                'bt-exclude-tracker.name': 'BitTorrent Exclude Trackers',
                'bt-exclude-tracker.description': 'Comma separated list of BitTorrent tracker\'s announce URI to remove. You can use special value * which matches all URIs, thus removes all announce URIs. When specifying * in shell command-line, don\'t forget to escape or quote it.',
                'bt-external-ip.name': 'External IP',
                'bt-external-ip.description': 'Specify the external IP address to report to a BitTorrent tracker. Although this function is named external, it can accept any kind of IP addresses. IPADDRESS must be a numeric IP address.',
                'bt-force-encryption.name': 'Force Encryption',
                'bt-force-encryption.description': 'Requires BitTorrent message payload encryption with arc4. This is a shorthand of --bt-require-crypto --bt-min-crypto-level=arc4. This option does not change the option value of those options. If true is given, deny legacy BitTorrent handshake and only use Obfuscation handshake and always encrypt message payload.',
                'bt-hash-check-seed.name': 'Hash Check Before Seeding',
                'bt-hash-check-seed.description': 'If true is given, after hash check using --check-integrity option and file is complete, continue to seed file. If you want to check file and download it only when it is damaged or incomplete, set this option to false. This option has effect only on BitTorrent download.',
                'bt-max-open-files.name': 'Max Open Files',
                'bt-max-open-files.description': 'Specify maximum number of files to open in multi-file BitTorrent/Metalink download globally.',
                'bt-max-peers.name': 'Max Peers',
                'bt-max-peers.description': 'Specify the maximum number of peers per torrent. 0 means unlimited.',
                'bt-metadata-only.name': 'Download Metadata Only',
                'bt-metadata-only.description': 'Download meta data only. The file(s) described in meta data will not be downloaded. This option has effect only when BitTorrent Magnet URI is used.',
                'bt-min-crypto-level.name': 'Min Crypto Level',
                'bt-min-crypto-level.description': 'Set minimum level of encryption method. If several encryption methods are provided by a peer, aria2 chooses the lowest one which satisfies the given level.',
                'bt-prioritize-piece.name': 'Prioritize Piece',
                'bt-prioritize-piece.description': 'Try to download first and last pieces of each file first. This is useful for previewing files. The argument can contain 2 keywords: head and tail. To include both keywords, they must be separated by comma. These keywords can take one parameter, SIZE. For example, if head=SIZE is specified, pieces in the range of first SIZE bytes of each file get higher priority. tail=SIZE means the range of last SIZE bytes of each file. SIZE can include K or M (1K = 1024, 1M = 1024K).',
                'bt-remove-unselected-file.name': 'Remove Unselected File',
                'bt-remove-unselected-file.description': 'Removes the unselected files when download is completed in BitTorrent. To select files, use --select-file option. If it is not used, all files are assumed to be selected. Please use this option with care because it will actually remove files from your disk.',
                'bt-require-crypto.name': 'Require Crypto',
                'bt-require-crypto.description': 'If true is given, aria2 doesn\'t accept and establish connection with legacy BitTorrent handshake(\\19BitTorrent protocol). Thus aria2 always uses Obfuscation handshake.',
                'bt-request-peer-speed-limit.name': 'Preferred Download Speed',
                'bt-request-peer-speed-limit.description': 'If the whole download speed of every torrent is lower than SPEED, aria2 temporarily increases the number of peers to try for more download speed. Configuring this option with your preferred download speed can increase your download speed in some cases. You can append K or M (1K = 1024, 1M = 1024K).',
                'bt-save-metadata.name': 'Save Metadata',
                'bt-save-metadata.description': 'Save meta data as ".torrent" file. This option has effect only when BitTorrent Magnet URI is used. The file name is hex encoded info hash with suffix ".torrent". The directory to be saved is the same directory where download file is saved. If the same file already exists, meta data is not saved.',
                'bt-seed-unverified.name': 'Not Verify Downloaded Fileds',
                'bt-seed-unverified.description': 'Seed previously downloaded files without verifying piece hashes.',
                'bt-stop-timeout.name': 'Stop Timeout',
                'bt-stop-timeout.description': 'Stop BitTorrent download if download speed is 0 in consecutive SEC seconds. If 0 is given, this feature is disabled.',
                'bt-tracker.name': 'BitTorrent Trackers',
                'bt-tracker.description': 'Comma separated list of additional BitTorrent tracker\'s announce URI. These URIs are not affected by --bt-exclude-tracker option because they are added after URIs in --bt-exclude-tracker option are removed.',
                'bt-tracker-connect-timeout.name': 'BitTorrent Tracker Connect Timeout',
                'bt-tracker-connect-timeout.description': 'Set the connect timeout in seconds to establish connection to tracker. After the connection is established, this option makes no effect and --bt-tracker-timeout option is used instead.',
                'bt-tracker-interval.name': 'BitTorrent Tracker Connect Interval',
                'bt-tracker-interval.description': 'Set the interval in seconds between tracker requests. This completely overrides interval value and aria2 just uses this value and ignores the min interval and interval value in the response of tracker. If 0 is set, aria2 determines interval based on the response of tracker and the download progress.',
                'bt-tracker-timeout.name': 'BitTorrent Tracker Timeout',
                'bt-tracker-timeout.description': '',
                'dht-file-path.name': 'DHT (IPv4) File',
                'dht-file-path.description': 'Change the IPv4 DHT routing table file to PATH.',
                'dht-file-path6.name': 'DHT (IPv6) File',
                'dht-file-path6.description': 'Change the IPv6 DHT routing table file to PATH.',
                'dht-listen-port.name': 'DHT Listen Port',
                'dht-listen-port.description': 'Set UDP listening port used by DHT(IPv4, IPv6) and UDP tracker. Multiple ports can be specified by using ,, for example: 6881,6885. You can also use - to specify a range: 6881-6999. , and - can be used together.',
                'dht-message-timeout.name': 'DHT Message Timeout',
                'dht-message-timeout.description': '',
                'enable-dht.name': 'Enable DHT (IPv4)',
                'enable-dht.description': 'Enable IPv4 DHT functionality. It also enables UDP tracker support. If a private flag is set in a torrent, aria2 doesn\'t use DHT for that download even if true is given.',
                'enable-dht6.name': 'Enable DHT (IPv6)',
                'enable-dht6.description': 'Enable IPv6 DHT functionality. If a private flag is set in a torrent, aria2 doesn\'t use DHT for that download even if true is given. Use --dht-listen-port option to specify port number to listen on.',
                'enable-peer-exchange.name': 'Enable Peer Exchange',
                'enable-peer-exchange.description': 'Enable Peer Exchange extension. If a private flag is set in a torrent, this feature is disabled for that download even if true is given.',
                'follow-torrent.name': 'Follow Torrent',
                'follow-torrent.description': 'If true or mem is specified, when a file whose suffix is .torrent or content type is application/x-bittorrent is downloaded, aria2 parses it as a torrent file and downloads files mentioned in it. If mem is specified, a torrent file is not written to the disk, but is just kept in memory. If false is specified, the .torrent file is downloaded to the disk, but is not parsed as a torrent and its contents are not downloaded.',
                'listen-port.name': 'Listen Port',
                'listen-port.description': 'Set TCP port number for BitTorrent downloads. Multiple ports can be specified by using ,, for example: 6881,6885. You can also use - to specify a range: 6881-6999. , and - can be used together: 6881-6889,6999.',
                'max-overall-upload-limit.name': 'Global Max Upload Limit',
                'max-overall-upload-limit.description': 'Set max overall upload speed in bytes/sec. 0 means unrestricted. You can append K or M (1K = 1024, 1M = 1024K).',
                'max-upload-limit.name': 'Max Upload Limit',
                'max-upload-limit.description': 'Set max upload speed per each torrent in bytes/sec. 0 means unrestricted. You can append K or M (1K = 1024, 1M = 1024K).',
                'peer-id-prefix.name': 'Peer ID Prefix',
                'peer-id-prefix.description': 'Specify the prefix of peer ID. The peer ID in BitTorrent is 20 byte length. If more than 20 bytes are specified, only first 20 bytes are used. If less than 20 bytes are specified, random byte data are added to make its length 20 bytes.',
                'seed-ratio.name': 'Min Share Ratio',
                'seed-ratio.description': 'Specify share ratio. Seed completed torrents until share ratio reaches RATIO. You are strongly encouraged to specify equals or more than 1.0 here. Specify 0.0 if you intend to do seeding regardless of share ratio. If --seed-time option is specified along with this option, seeding ends when at least one of the conditions is satisfied.',
                'seed-time.name': 'Min Seed Time',
                'seed-time.description': 'Specifying --seed-time=0 disables seeding after download completed.',
                'follow-metalink.name': '',
                'follow-metalink.description': '',
                'metalink-base-uri.name': '',
                'metalink-base-uri.description': '',
                'metalink-language.name': '',
                'metalink-language.description': '',
                'metalink-location.name': '',
                'metalink-location.description': '',
                'metalink-os.name': '',
                'metalink-os.description': '',
                'metalink-version.name': '',
                'metalink-version.description': '',
                'metalink-preferred-protocol.name': '',
                'metalink-preferred-protocol.description': '',
                'metalink-enable-unique-protocol.name': '',
                'metalink-enable-unique-protocol.description': '',
                'enable-rpc.name': 'Enable JSON-RPC/XML-RPC Server',
                'enable-rpc.description': '',
                'pause-metadata.name': 'Pause After Metadata Downloaded',
                'pause-metadata.description': 'Pause downloads created as a result of metadata download. There are 3 types of metadata downloads in aria2: (1) downloading .torrent file. (2) downloading torrent metadata using magnet link. (3) downloading metalink file. These metadata downloads will generate downloads using their metadata. This option pauses these subsequent downloads. This option is effective only when --enable-rpc=true is given.',
                'rpc-allow-origin-all.name': 'Allow All Origin Request',
                'rpc-allow-origin-all.description': 'Add Access-Control-Allow-Origin header field with value * to the RPC response.',
                'rpc-listen-all.name': 'Listen on All Network Interfaces',
                'rpc-listen-all.description': 'Listen incoming JSON-RPC/XML-RPC requests on all network interfaces. If false is given, listen only on local loopback interface.',
                'rpc-listen-port.name': 'Listen Port',
                'rpc-listen-port.description': '',
                'rpc-max-request-size.name': 'Max Request Size',
                'rpc-max-request-size.description': 'Set max size of JSON-RPC/XML-RPC request. If aria2 detects the request is more than SIZE bytes, it drops connection.',
                'rpc-save-upload-metadata.name': 'Save Upload Metadata',
                'rpc-save-upload-metadata.description': 'Save the uploaded torrent or metalink meta data in the directory specified by --dir option. The file name consists of SHA-1 hash hex string of meta data plus extension. For torrent, the extension is \'.torrent\'. For metalink, it is \'.meta4\'. If false is given to this option, the downloads added by aria2.addTorrent() or aria2.addMetalink() will not be saved by --save-session option.',
                'rpc-secure.name': 'Enable SSL/TLS',
                'rpc-secure.description': 'RPC transport will be encrypted by SSL/TLS. The RPC clients must use https scheme to access the server. For WebSocket client, use wss scheme. Use --rpc-certificate and --rpc-private-key options to specify the server certificate and private key.',
                'allow-overwrite.name': '',
                'allow-overwrite.description': '',
                'allow-piece-length-change.name': '',
                'allow-piece-length-change.description': '',
                'always-resume.name': '',
                'always-resume.description': '',
                'async-dns.name': '',
                'async-dns.description': '',
                'auto-file-renaming.name': '',
                'auto-file-renaming.description': '',
                'auto-save-interval.name': '',
                'auto-save-interval.description': '',
                'conditional-get.name': '',
                'conditional-get.description': '',
                'conf-path.name': '',
                'conf-path.description': '',
                'console-log-level.name': '',
                'console-log-level.description': '',
                'daemon.name': '',
                'daemon.description': '',
                'deferred-input.name': '',
                'deferred-input.description': '',
                'disable-ipv6.name': '',
                'disable-ipv6.description': '',
                'disk-cache.name': '',
                'disk-cache.description': '',
                'download-result.name': '',
                'download-result.description': '',
                'dscp.name': '',
                'dscp.description': '',
                'rlimit-nofile.name': '',
                'rlimit-nofile.description': '',
                'enable-color.name': '',
                'enable-color.description': '',
                'enable-mmap.name': '',
                'enable-mmap.description': '',
                'event-poll.name': '',
                'event-poll.description': '',
                'file-allocation.name': '',
                'file-allocation.description': '',
                'force-save.name': 'Force Save',
                'force-save.description': 'Save download with --save-session option even if the download is completed or removed. This option also saves control file in that situations. This may be useful to save BitTorrent seeding which is recognized as completed state.',
                'hash-check-only.name': '',
                'hash-check-only.description': '',
                'human-readable.name': '',
                'human-readable.description': '',
                'max-download-result.name': '',
                'max-download-result.description': '',
                'max-mmap-limit.name': '',
                'max-mmap-limit.description': '',
                'max-resume-failure-tries.name': '',
                'max-resume-failure-tries.description': '',
                'min-tls-version.name': '',
                'min-tls-version.description': '',
                'log-level.name': '',
                'log-level.description': '',
                'piece-length.name': '',
                'piece-length.description': '',
                'optimize-concurrent-downloads.name': '',
                'optimize-concurrent-downloads.description': '',
                'show-console-readout.name': '',
                'show-console-readout.description': '',
                'summary-interval.name': '',
                'summary-interval.description': '',
                'max-overall-download-limit.name': 'Global Max Download Limit',
                'max-overall-download-limit.description': 'Set max overall download speed in bytes/sec. 0 means unrestricted. You can append K or M (1K = 1024, 1M = 1024K).',
                'max-download-limit.name': 'Max Download Limit',
                'max-download-limit.description': 'Set max download speed per each download in bytes/sec. 0 means unrestricted. You can append K or M (1K = 1024, 1M = 1024K).',
                'no-conf.name': '',
                'no-conf.description': '',
                'no-file-allocation-limit.name': '',
                'no-file-allocation-limit.description': '',
                'parameterized-uri.name': '',
                'parameterized-uri.description': '',
                'quiet.name': '',
                'quiet.description': '',
                'realtime-chunk-checksum.name': '',
                'realtime-chunk-checksum.description': '',
                'remove-control-file.name': '',
                'remove-control-file.description': '',
                'save-session.name': '',
                'save-session.description': '',
                'save-session-interval.name': '',
                'save-session-interval.description': '',
                'socket-recv-buffer-size.name': '',
                'socket-recv-buffer-size.description': '',
                'stop.name': '',
                'stop.description': '',
                'truncate-console-readout.name': '',
                'truncate-console-readout.description': ''
            }
        });
    }])
})();
